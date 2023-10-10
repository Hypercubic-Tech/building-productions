import { useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios"
  ;
import Project from "../../components/projects/Project";
import LoadingPage from "../../components/ui/LoadingPage";

import { setUserStatus } from "../../store/slices/statusSlice";

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
  const [userStatusUpdate, setUserStatusUpdate] = useState(null);

  const [trialExpired, setTrialExpired] = useState(false);

  const allowedProductsHandler = () => {
    setAllowedExport(paymentPlan?.payment_plan?.allowed_export);
  };

  const trialExpiredChecker = () => {
    const now = new Date();
    const expiredDate = paymentPlan?.trial_expires != null ? new Date(paymentPlan?.trial_expires) : null;

    if (now > expiredDate && expiredDate !== null) {
      setTrialExpired(true);
    } {
      setTrialExpired(false);
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
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    trialExpiredChecker();
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
        try {
          const response = await axios.get(url);
          const data = response.data;

          setPaymentPlan(data[0]);

          if (data[0]?.payment_duration === "month") {
            setUserStatusUpdate({
              username: data[0]?.username,
              p_title: data[0]?.payment_plan?.name,
              payment_duration: data[0]?.payment_duration,
              allowed_export: data[0]?.payment_plan?.allowed_export,
              allowed_media: data[0]?.payment_plan?.allowed_media,
              allowed_projects: data[0]?.payment_plan?.month_allowed_projects,
              all_projects:
                data[0]?.projects.length === 0 ? 0 : data[0]?.projects.length,
            });
          }
          if (data[0]?.payment_duration === "year") {
            setUserStatusUpdate({
              username: data[0]?.username,
              p_title: data[0]?.payment_plan?.name,
              payment_duration: data[0]?.payment_duration,
              allowed_export: data[0]?.payment_plan?.allowed_export,
              allowed_media: data[0]?.payment_plan?.allowed_media,
              allowed_projects: data[0]?.payment_plan?.year_allowed_projects,
              all_projects: data[0]?.projects.lenght,
            });
          }
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
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
    allowedProductsHandler();
  }, [projectId]);

  useEffect(() => {
    dispatch(setUserStatus(userStatusUpdate));
  }, [userStatusUpdate]);

  const editHandler = (product) => {
    setEditProductItem(product);
  };
 
  return (
    <>
      {!isLoggedIn || isLoading ? (
        <LoadingPage />
      ) : trialExpired ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', justifyContent: 'center' }}>
          <h2>უფასო საცდელი ვადა ამოიწურა გთხოვთ გაანახლოთ გადახდის მეთოდი</h2>
          <Link
            type="button"
            className="btn btn-primary ghost-btn fw-boldest"
            href="/account"
          >
            პროფილი
          </Link>
        </div>
      ) : (
        <Project
          allowedProductsHandler={allowedProductsHandler}
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
