import Project from "@/components/projects/Project";
import axiosPrivate from "@/api/axios";
import { useEffect, useState } from "react";
import axios from "axios";

export const getStaticPaths = async () => {
    //reqvest to get projects data
    const res = await axiosPrivate.get("/api/admin/projects/get_projects");

    let paths = [];
    if (res?.data?.length) {
        paths = res?.data?.map((item) => {
            return {
                params: { projectId: item?._id },
            };
        });
    }
    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps = async ({ params }) => {
    const projectId = params?.projectId || undefined;
    const res = await axiosPrivate.post("/api/admin/projects/get_users_project", { projectId });

  return {
    props: {
      pr: res?.data?.project[0],
    },
  };
};

const index = ({ pr }) => {
  const [suppliers, setSuppliers] = useState(null);
  const [unit, setUnit] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const getProductHandler = async () => {
      try {
        await axios.get('http://localhost:1337/api/products')
        .then((res) => {
          console.log(res)
        })
      } catch (err) {
        console.log(err);
      }
    };

    const getSupplierHandler = async() => {
      await axios.get('http://localhost:1337/api/suppliers')
      .then((res) => {
        const data = res.data
        setSuppliers(data.data);
      })
    };

    const getUnitHandler = async() => {
      await axios.get('http://localhost:1337/api/units')
      .then((res) => {
        const data = res.data
        setUnit(data.data);
      })
    };

    const getCategoryHandler = async() => {
      await axios.get('http://localhost:1337/api/categories')
      .then((res) => {
        const data = res.data
        setCategory(data.data);
      })
    };

    getProductHandler();
    getSupplierHandler();
    getUnitHandler();
    getCategoryHandler();
  }, []);

  return <Project pr={pr} suppliers={suppliers} unit={unit} category={category} />;
};

export default index;
