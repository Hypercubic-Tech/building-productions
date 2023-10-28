import { useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import Link from "next/link";
import axios from "axios"
  ;
import Project from "../../components/projects/Project";
import LoadingPage from "../../components/ui/LoadingPage";

const index = () => {
  const router = useRouter();
  const { projectId } = router.query;
  // const shareLink = window.location.href;

  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const status = useSelector((state) => state.userStatus)

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

  const [hashedUrl, setHashedUrl] = useState(null);

  const editHandler = (product) => {
    setEditProductItem(product);
  };

  console.log(hashedUrl)
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

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

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


  useEffect(() => {
    async function hashUrl(url) {
      const encoder = new TextEncoder();
      const data = encoder.encode(url);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashedUrl = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
      return hashedUrl;
    }

    const shareLink = window.location.href;

    hashUrl(shareLink).then(hashed => {
      setHashedUrl(hashed);
    });
  }, []);

  console.log(isLoggedIn)

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : status.trial_expires === 'expired' && status.p_title === "დამწყები" ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', justifyContent: 'center' }}>
          <h2 className="geo-title">უფასო საცდელი ვადა ამოიწურა გთხოვთ გაანახლოთ გადახდის მეთოდი</h2>
          <Link
            type="button"
            className="btn btn-primary ghost-btn fw-boldest geo-title"
            href="/account"
          >
            პროფილი
          </Link>
        </div>
      ) : (
        <Project
          isLoggedIn={isLoggedIn}
          shareLink={hashedUrl}
          allowedExport={status.allowed_export}
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
