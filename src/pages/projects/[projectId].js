import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setCategory } from "../../store/slices/categorySlice";
import { setAuthState } from "../../store/slices/authSlice";

import Project from "../../components/projects/Project";
import Unauthorized from "../401";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { projectId } = router.query;
  const loggedIn = useSelector(setAuthState);
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);

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
    const fetchData = async () => {
      if (projectId) {
        try {
          const projectRes = await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?populate=*&filters[id][$eq]=${projectId}`);
          const projectData = projectRes.data?.data;
          setProject(projectData);

          const productRes = await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?populate=products.categories&filters[id][$eq]=${projectId}`);
          const productData = productRes.data;
          setProductOptions(productData);

          const categoryRes = await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/categories?populate=*&filters[projects][id][$eq]=${projectId}`);
          const categoryData = categoryRes.data.data;
          setProjectCategory(categoryData);
          dispatch(setCategory(categoryData[0]?.id));
        } catch (error) {
          console.log(error)
        }
      }
    };

    fetchData();
  }, [projectId]);

  const editHandler = (product) => {
    setEditProductItem(product);
  };

  return (
    <>
      {!isLoggedIn ? (
        <Unauthorized />
      ) : (
        <Project
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
        />
      )}
    </>
  )
};

export default index;
