import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import axios from "axios";

import { setCategory } from "../../store/slices/categorySlice";

import Project from "../../components/projects/Project";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { projectId } = router.query;

  const [suppliers, setSuppliers] = useState(null);
  const [unit, setUnit] = useState(null);
  const [crafts, setCrafts] = useState(null);
  const [project, setProject] = useState(null);
  const [craftStatus, setCraftStatus] = useState(null);
  const [productStatus, setProductStatus] = useState(null);
  const [projectCategory, setProjectCategory] = useState(null);
  const [productOptions, setProductOptions] = useState(null);
  const [editProductItem, setEditProductItem] = useState(null);
  const [defaultImage, setDefaultImage] = useState(null);
  
  useEffect(() => {
    const getSupplierHandler = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/suppliers`)
        .then((res) => {
          const data = res.data;
          setSuppliers(data.data);
        });
    };

    const getUnitHandler = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/units`)
        .then((res) => {
          const data = res.data;
          setUnit(data.data);
        });
    };

    const getCraftsHandler = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/crafts?populate=image,categories`)
        .then((res) => {
          const data = res.data;
          setCrafts(data.data);
        });
    };

    const getCraftsStatusHandler = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/craft-statuses`)
        .then((res) => {
          const data = res.data;
          setCraftStatus(data.data);
        });
    };

    const getProductsStatusHandler = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/product-statuses`)
        
        .then((res) => {
          const data = res.data;
          setProductStatus(data.data);
        });
    };


    const getDefaultImage = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/default-image?populate=NoImage`)
        
        .then((res) => {
          const data = res.data;
          setDefaultImage(data.data.attributes.NoImage.data.attributes.url);
        });
    };

    getDefaultImage();
    getProductsStatusHandler();
    getCraftsStatusHandler();
    getCraftsHandler();
    getSupplierHandler();
    getUnitHandler();
  }, []);
  
  useEffect(() => {
    if (projectId) {
      const getProject = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?populate=*&filters[id][$eq]=${projectId}`)
        .then((res) => {
          const data = res.data;
          setProject(data?.data);
        });
      };

      const getProductCategory = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?populate=products.categories&filters[id][$eq]=${projectId}`)
        .then((res) => {
          const data = res.data
          setProductOptions(data);
        });
      };

      const getProjectCategory = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/categories?populate=*&filters[projects][id][$eq]=${projectId}`)
          .then((res) => {
            const data = res.data;
            setProjectCategory(data.data);
            dispatch(setCategory(data?.data[0]?.id));
          });
      };

      getProductCategory();
      getProject();
      getProjectCategory();
    }
  }, [projectId])

  const editHandler = (product) => {
    setEditProductItem(product);
  };

  return <Project
    productStatus={productStatus}
    productOptions={productOptions}
    project={project}
    craftStatus={craftStatus}
    crafts={crafts}
    suppliers={suppliers}
    unit={unit}
    projectCategory={projectCategory}
    editHandler={editHandler}
    editProductItem={editProductItem}
    defaultImage={defaultImage}
  />;
};

export default index;
