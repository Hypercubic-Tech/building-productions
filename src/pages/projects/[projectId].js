import { useState, useEffect } from 'react'
import axios from 'axios';
import Project from "@/components/projects/Project";
import { useRouter } from "next/router";

const index = () => {
  const [suppliers, setSuppliers] = useState(null);
  const [unit, setUnit] = useState(null);
  const [category, setCategory] = useState(null);

  const router = useRouter();
  const { projectId } = router.query;

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
  
  return <Project pr={projectId} suppliers={suppliers} unit={unit} category={category} />;
};

export default index;
