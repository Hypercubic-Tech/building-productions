import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import axios from "axios";

import { setCategory } from "../../store/slices/categorySlice";

import Project from "../../components/projects/Project";
import LoadingPage from "../../components/ui/LoadingPage";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { projectId } = router.query;
  const { data: session } = useSession();

  const userId = useSelector((state) => state.auth.user_id);
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const provider = useSelector((state) => state.auth.provider);

  const [isLoading, setIsLoading] = useState(true);
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

  const [paymentPlan, setPaymentPlan] = useState(null);
  const [allowedExport, setAllowedExport] = useState(false);
  const [allowedProductsCount, setAllowedProductsCount] = useState(null);
  const [allProductsCount, setAllProductsCount] = useState(null);
  
  const allowedProductsHandler = () => {
    setAllowedExport(paymentPlan?.payment_plan?.allowed_export);

    if (paymentPlan?.payment_duration === "month") {
      setAllowedProductsCount(
        paymentPlan?.payment_plan?.month_allowed_products
      );
    } else {
      setAllowedProductsCount(paymentPlan?.payment_plan?.year_allowed_products);
    }
  };

  const getProjectById = async () => {
    if (projectId) {
      try {
        const projectRes = await axios.get(
          `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?populate=*&filters[id][$eq]=${projectId}`
        );
        const projectData = projectRes.data?.data;
        setProject(projectData);
        setAllProductsCount(
          projectRes.data.data[0]?.attributes?.products?.data?.length
        );

        const productRes = await axios.get(
          `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?populate=products.categories&filters[id][$eq]=${projectId}`
        );
        const productData = productRes.data;
        setProductOptions(productData);
        const categoryRes = await axios.get(
          `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/categories?populate=*&filters[projects][id][$eq]=${projectId}`
        );
        const categoryData = categoryRes.data.data;
        setProjectCategory(categoryData);
        dispatch(setCategory(categoryData[0]?.id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    allowedProductsHandler();
  }, [paymentPlan]);

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
        .get(
          `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/crafts?populate=image,categories`
        )
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
        .get(
          `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/default-image?populate=NoImage`
        )

        .then((res) => {
          const data = res.data;
          setDefaultImage(
            data.data?.attributes?.NoImage?.data?.attributes?.url
          );
        });
    };

    const loggedUserInfo = async () => {
      let url;

      if (provider === "google") {
        url = `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users?filters[email]=${session?.user.email}&populate=*`;
      } else {
        url = `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users?filters[id]=${userId}&populate=*`;
      }
      if (url) {
        await axios.get(url).then((res) => {
          const data = res.data;
          setPaymentPlan(data[0]);
          setIsLoading(false);
        });
      }
    };

    loggedUserInfo();
    getDefaultImage();
    getProductsStatusHandler();
    getCraftsStatusHandler();
    getCraftsHandler();
    getSupplierHandler();
    getUnitHandler();
  }, []);

  useEffect(() => {
    getProjectById();
  }, [projectId]);

  const editHandler = (product) => {
    setEditProductItem(product);
  };

  return (
    <>
      {!isLoggedIn || isLoading ? (
        <LoadingPage />
      ) : (
        <Project
        allowedProductsHandler={allowedProductsHandler}
          allProductsCount={allProductsCount}
          allowedProducts={allowedProductsCount}
          allowedExport={allowedExport}
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
          getProjectById={getProjectById}
        />
      )}
    </>
  );
};

export default index;
