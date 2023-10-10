import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import { setUserStatus } from "../../store/slices/statusSlice";
import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";
import notify from "../../utils/notify";

import LoadingPage from "../../components/ui/LoadingPage";
import EditProject from "../../components/popup/EditProject";
import AddProject from "../../components/popup/AddProject";
import DeleteBtn from "../../components/svg/DeleteBtn";
import EditSvg from "../../components/svg/EditSvg";
import MapSvg from "../../components/svg/MapSvg";
import AddProjectSvg from "../../components/svg/AddProjectSvg";

import styles from "../../components/popup/Modal.module.css";

const index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [close, setClose] = useState(false);
  const [addProject, setAddProject] = useState(false);
  const [editProject, setEditProject] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [projectData, setProjectData] = useState(null);
  const [defaultImage, setDefaultImage] = useState(null);
  const [pageIndex, setPageIndex] = useState(1);
  const [paymentPlan, setPaymentPlan] = useState(null);
  const [cities, setCities] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [condition, setCondition] = useState(null);
  const [currentCondition, setCurrentCondition] = useState(null);
  const [categories, setCategories] = useState(null);
  const [allowedProjectsCount, setAllowedProjectsCount] = useState(null);
  const [userProjectsLenght, setUserProjectsLenght] = useState(null);
  const [trialExpired, setTrialExpired] = useState(false);

  const userId = useSelector((state) => state.auth.user_id);
  const searchValue = useSelector((state) => state.proj.searchType);
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const provider = useSelector((state) => state.auth.provider);

  const { data: session } = useSession();
  const dispatch = useDispatch();


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
        console.log('im heree', data)
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  let itemsPerPage = 8;
  let projectsToMap = projectData;
  const totalPages = Math.ceil(projectsToMap?.length / itemsPerPage);
  const startIndex = (pageIndex - 1) * itemsPerPage;
  const endIndex = pageIndex * itemsPerPage;

  if (searchValue) {
    const lowercaseSearchType = searchValue.toLowerCase();
    if (projectData && Array.isArray(projectData)) {
      projectsToMap = projectData.reduce((filteredProjects, project) => {
        const projectTitle = project?.attributes?.title?.toLowerCase();
        const projectAddress = project?.attributes?.address?.toLowerCase();
        if (
          projectTitle === lowercaseSearchType ||
          projectAddress === lowercaseSearchType
        ) {
          return [project];
        } else if (
          projectTitle.includes(lowercaseSearchType) ||
          projectAddress.includes(lowercaseSearchType)
        ) {
          return [...filteredProjects, project];
        }
        return filteredProjects;
      }, []);
    } else {
      console.log("projectData is null or not an array");
    }
  }

  const handleDecrementPageIndex = () => {
    if (pageIndex > 1) {
      setPageIndex(pageIndex - 1);
    }
  };

  const handleChangePageIndex = (event) => {
    const newPageIndex = parseInt(event.target.id);
    setPageIndex(newPageIndex);
  };

  const handleIncrementPageIndex = () => {
    if (pageIndex < totalPages) {
      setPageIndex(pageIndex + 1);
    }
  };

  const addProjectHandler = () => {
    console.log(userProjectsLenght, 'lengh')
    console.log(allowedProjectsCount, 'allowed')
    if (userProjectsLenght < allowedProjectsCount) {
      setAddProject(!addProject);
      setClose(true);
    } else if (allowedProjectsCount === "უსასრულო") {
      setAddProject(!addProject);
      setClose(true);
    } else {
      notify(true, "პროექტის ატვირთვა უარყოფილია თქვენ ამოგეწურათ ლიმიტი");
    }
  };

  const dismissHandler = () => {
    setEditProject(false);
    setAddProject(false);
    setClose(false);
  };

  const trialExpiredChecker = () => {
    const now = new Date();
    console.log(now, 'now')
    const expiredDate = paymentPlan?.trial_expires != null ? new Date(paymentPlan?.trial_expires) : null;
    console.log(expiredDate, 'expired')

    if (now > expiredDate && expiredDate !== null) {
      setTrialExpired(true);
      console.log('hi');
    } {
      setTrialExpired(false);
      console.log('ok')
    }
  };

  const allowedProjectsHandler = () => {
    console.log(paymentPlan)
    if (paymentPlan?.payment_duration === "month") {
      setAllowedProjectsCount(
        paymentPlan?.payment_plan?.month_allowed_projects
      );
    } else {
      setAllowedProjectsCount(paymentPlan?.payment_plan?.year_allowed_projects);
    }
  };

  const getProjectsData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?populate=image,main_img_url&filters[users_permissions_user][id][$eq]=${userId}`
      );
      setShowProject(false);
      return response.data;
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      return [];
    }
  };

  const editHandler = async (item) => {
    let id = item.id;

    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?filters[id][$eq]=${id}&populate=*`
      );
      const data = response.data;
      setEditProject(data);
    } catch (error) {
      console.log(error);
    }
  };

  const confirmHandler = (item) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "დაადასტურეთ, რომ ნადვილად გსურთ პროექტის წაშლა",
        text: "თანხმობის შემთხვევაში, პროექტი წაიშლება",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "წაშლა",
        cancelButtonText: "უარყოფა",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteProjectHandler(item);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          notify(true, "პროექტის წაშლა უარყოფილია");
        }
      });
  };

  const deleteProjectHandler = async (item) => {
    const projectId = item.id;
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects/${projectId}`
      );
      const data = await getProjectsData();
      setProjectData(data.data);
      dispatch(setUserStatus({ all_projects: data?.meta?.pagination?.total }));
      setUserProjectsLenght(data?.meta?.pagination?.total);

    } catch (error) {
      console.log(error);
    }
  };

  const getDefaultImage = async () => {
    await axios
      .get(
        `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/default-image?populate=NoImage`
      )

      .then((res) => {
        const data = res.data;
        setDefaultImage(data.data.attributes.NoImage.data?.attributes.url);
      });
  };

  let buttonWrap = (
    <div className={`${styles.buttons} my-6`}>
      <Link
        type="button"
        className="btn btn-primary ghost-btn fw-boldest"
        href="/"
      >
        მთავარი გვერდი
      </Link>
      <button
        onClick={addProjectHandler}
        type="button"
        className="btn btn-primary fill-btn fw-boldest"
      >
        <AddProjectSvg />
        დაამატე ობიექტი
      </button>
    </div>
  );

  useEffect(() => {
    getDefaultImage()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjectsData();
      setProjectData(data.data);
      dispatch(setUserStatus({ all_projects: data?.meta?.pagination?.total }));
      allowedProjectsHandler();
      trialExpiredChecker();
      setUserProjectsLenght(data?.meta?.pagination?.total);
    };

    fetchData();
  }, [showProject]);

  useEffect(() => {
    allowedProjectsHandler();
    trialExpiredChecker();
  }, [paymentPlan]);

  useEffect(() => {
    const getCategoriesHandler = async () => {
      try {
        await axios
          .get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/categories`)
          .then((res) => {
            const data = res.data;
            setCategories(data.data);
          });
      } catch (error) {
        console.log(error);
      }
    };

    const getCurrentConditionHandler = async () => {
      try {
        await axios
          .get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/current-conditions`)
          .then((res) => {
            const data = res.data;
            setCurrentCondition(data.data);
          });
      } catch (error) {
        console.log(error);
      }
    };

    const getConditionHandler = async () => {
      try {
        await axios
          .get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/conditions`)
          .then((res) => {
            const data = res.data;
            setCondition(data.data);
          });
      } catch (error) {
        console.log(error);
      }
    };

    const getCitiesHandler = async () => {
      try {
        await axios
          .get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/cities`)
          .then((res) => {
            const data = res.data;
            setCities(data.data);
          });
      } catch (error) {
        console.log(error);
      }
    };

    const getPropertyTypesHandler = async () => {
      try {
        axios
          .get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/property-types`)
          .then((res) => {
            const data = res.data;
            setPropertyType(data.data);
          });
      } catch (error) {
        console.log(error);
      }
    };

    getCategoriesHandler();
    getCurrentConditionHandler();
    getConditionHandler();
    getCitiesHandler();
    getPropertyTypesHandler();
  }, []);

  useEffect(() => {
    loggedUserInfo();
  }, []);
  return (
    <>
      {!isLoggedIn || isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <img
            className={styles.projectBg}
            src="/images/projectBg.png"
            alt="bg"
          />
          {trialExpired && trialExpired ? (
            <div className={styles.expired}>
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
            <div
              className="container"
              style={{
                position: "relative",
                backgroundColor: "none",
                minHeight: "300px"
              }}
            >
              {projectsToMap?.length > 0 ? buttonWrap : ""}
              <div
                className={`${styles.flexWrap} d-flex justify-content-center `}
                style={{ zIndex: 1 }}
              >
                {/* <BuildingBg /> */}
                {projectsToMap?.length > 0 ? (
                  projectsToMap.slice(startIndex, endIndex).map((item, index) => {
                    const id = item?.attributes?.main_img_id;
                    const imgId = parseInt(id);
                    const imageWithMainId = item?.attributes?.image?.data?.find(
                      (image) => image.id === imgId
                    );

                    return (
                      <div
                        key={index}
                        className={`card-body ${styles.wrapChild} card`}
                      >
                        <div
                          className={`${styles.imgWrap} card`}
                          style={{ paddingBottom: "20px" }}
                        >
                          <Link
                            href={{
                              pathname: `/projects/${item?.id}`,
                              query: { projectId: item?.id },
                            }}
                            passHref
                            className={styles.cardLink}
                          >
                            <div className={styles.cardLinkImg}>
                              <img
                                src={
                                  (imageWithMainId &&
                                    process.env.NEXT_PUBLIC_BUILDING_URL +
                                    imageWithMainId?.attributes?.url) ||
                                  (item?.attributes?.image?.data?.[0]?.attributes
                                    ?.url &&
                                    process.env.NEXT_PUBLIC_BUILDING_URL +
                                    item?.attributes?.image?.data?.[0]
                                      ?.attributes?.url) ||
                                  "/images/test-img.png"
                                }
                                className="card-img-top"
                                alt="project-img"
                              />
                            </div>
                            <div className={`card-body ${styles.cardTtl}`}>
                              <div
                                className="card-title"
                                style={{ opacity: ".8" }}
                              >
                                {item?.attributes?.title}
                              </div>
                              <p className="card-text">
                                <MapSvg />
                                {item?.attributes?.address}
                              </p>
                            </div>
                          </Link>
                          <div className={`${styles.moodalButtons}`}>
                            <div
                              onClick={() => editHandler(item)}
                              className={`fill-btn rotate-svg-btn btn btn-primary fw-boldest`}
                            >
                              <EditSvg />
                              <span>რედაქტირება</span>
                            </div>
                            <div
                              onClick={() => confirmHandler(item)}
                              className="btn red-ghost-btn fw-boldest btn-primary"
                            >
                              <DeleteBtn />
                              <span>წაშლა</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className={styles.wrap}>
                    <h2 className={`geo-title `}>პროექტები ვერ მოიძებნა</h2>
                    {buttonWrap}
                    {/* <BuildingBg /> */}
                  </div>
                )}
              </div>
              {projectsToMap?.length > itemsPerPage && (
                <nav aria-label="Page navigation example" className="m-5 p-5">
                  <ul className="pagination">
                    <li
                      className="page-item"
                      onClick={handleDecrementPageIndex}
                      value={pageIndex}
                    >
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li
                        className="page-item"
                        onClick={handleChangePageIndex}
                        key={index + 1}
                      >
                        <a className="page-link" id={index + 1} href="#">
                          {index + 1}
                        </a>
                      </li>
                    ))}
                    <li
                      className="page-item"
                      onClick={handleIncrementPageIndex}
                      value={pageIndex}
                    >
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          )}
          {addProject && (
            <AddProject
              setAddProject={setAddProject}
              cities={cities}
              propertyType={propertyType}
              condition={condition}
              categories={categories}
              currentCondition={currentCondition}
              setShowProject={setShowProject}
              dismiss={dismissHandler}
            />
          )}
          {editProject && (
            <EditProject
              cities={cities}
              propertyType={propertyType}
              condition={condition}
              categories={categories}
              currentCondition={currentCondition}
              setEditProject={setEditProject}
              setShowProject={setShowProject}
              project={editProject}
              dismiss={dismissHandler}
            />
          )}
        </>
      )}
    </>
  );
};

export default index;