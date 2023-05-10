import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Project from "@/components/projects/Project";

const index = () => {
  const [suppliers, setSuppliers] = useState(null);
  const [unit, setUnit] = useState(null);
  const [category, setCategory] = useState(null);
  const [crafts, setCrafts] = useState(null);
  const [products, setProducts] = useState(null);
  const [project, setProject] = useState(null);
  const [craftStatus, setCraftStatus] = useState(null);

  const router = useRouter();
  const { projectId } = router.query;

  useEffect(() => {
    if (projectId) {
      const getProject = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?filters[id][$eq]=${projectId}&populate=*`)
          .then((res) => {
            const data = res.data;
            setProject(data.data);
          })
      };
      getProject();
    }

  }, [projectId])

  useEffect(() => {
    const getProductHandler = async () => {
      try {
        await axios
          .get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products`)
          .then((res) => {
            const data = res.data;
            setProducts(data.data);
          });
      } catch (err) {
        console.log(err);
      }
    };

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

    const getCategoryHandler = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/categories`)
        .then((res) => {
          const data = res.data;
          setCategory(data.data);
        });
    };

    const getCraftsHandler = async () => {
      await axios
        .get("http://localhost:1337/api/crafts?populate=*")
        .then((res) => {
          const data = res.data;
          setCrafts(data.data);
          console.log(res);
        });
    };

    const getCraftsStatusHandler = async () => {
      await axios
        .get("http://localhost:1337/api/craft-statuses")
        .then((res) => {
          const data = res.data;
          setCraftStatus(data.data);
        });
    };

    getCraftsStatusHandler();
    getCraftsHandler();
    getProductHandler();
    getSupplierHandler();
    getUnitHandler();
    getCategoryHandler();

  }, []);

  return <Project pr={projectId} proj={project} craftStatus={craftStatus} crafts={crafts} suppliers={suppliers} unit={unit} category={category} />;
};

export default index;
