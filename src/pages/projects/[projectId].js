import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Project from "../../components/projects/Project";

const index = () => {
  const [suppliers, setSuppliers] = useState(null);
  const [unit, setUnit] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  const [crafts, setCrafts] = useState(null);
  const [allProduct, setAllProduct] = useState(null);
  const [project, setProject] = useState(null);
  const [craftStatus, setCraftStatus] = useState(null);
  const [projectCategory, setProjectCategory] = useState(null);
  const [editProductItem, setEditProductItem] = useState(null);
  const router = useRouter();
  const { projectId } = router.query;

  useEffect(() => {
    if (projectId) {
      const getProject = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?filters[id][$eq]=${projectId}&populate=*`)
          .then((res) => {
            const data = res.data;
            setProject(data?.data);
          })
      };

      const getProjectCategory = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/categories?populate=*&filters[projects][id][$eq]=${projectId}`)
          .then((res) => {
            const data = res.data;
            setProjectCategory(data.data);
          })
      };
      getProject();
      getProjectCategory();
    }
  }, [projectId])

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
        .get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/crafts?populate=*`)
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

    const getCategoriesHandler = async () => {
      await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/categories`)
        .then((res) => {
          const data = res.data;
          setAllCategories(data.data);
        })
    };

    getCategoriesHandler()
    getCraftsStatusHandler();
    getCraftsHandler();
    getSupplierHandler();
    getUnitHandler();
  }, []);

  const editHandler = (product) => {
    setEditProductItem(product);
  };

  return <Project
    allProduct={allProduct}
    pr={projectId}
    proj={project}
    craftStatus={craftStatus}
    crafts={crafts}
    suppliers={suppliers}
    unit={unit}
    allCategories={allCategories}
    projectCategory={projectCategory}
    editHandler={editHandler}
    editProductItem={editProductItem}
  />;
};

export default index;
