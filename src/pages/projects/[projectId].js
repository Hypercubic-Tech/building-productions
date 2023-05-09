import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import axios from 'axios';
import Project from "@/components/projects/Project";

const index = () => {
  const [suppliers, setSuppliers] = useState(null);
  const [unit, setUnit] = useState(null);
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState(null);

  const router = useRouter();
  const { projectId } = router.query;

  useEffect(() => {
    const getProductHandler = async () => {
      try {
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/products`)
          .then((res) => {
            const data = res.data
            setProducts(data.data);
          })
      } catch (err) {
        console.log(err);
      }
    };

    const getSupplierHandler = async () => {
      await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/suppliers`)
        .then((res) => {
          const data = res.data
          setSuppliers(data.data);
        })
    };

    const getUnitHandler = async () => {
      await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/units`)
        .then((res) => {
          const data = res.data
          setUnit(data.data);
        })
    };

    const getCategoryHandler = async () => {
      await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/categories`)
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
