import { useState, useEffect } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

// import { setAuthState } from "../../store/slices/authSlice";

import BuildingBg from "../../components/svg/BuildingBg";

import axios from "axios";
import Swal from "sweetalert2";

import EditProject from "../../components/popup/EditProject";
import AddProject from "../../components/popup/AddProject";
import Unauthorized from "../401";

import styles from "../../components/popup/Modal.module.css";

const index = () => {
    const userId = useSelector(state => state.auth.user_id)
    const searchValue = useSelector(state => state.proj.searchType)
    const isLoggedIn = useSelector((state) => state.auth.loggedIn);
    const [close, setClose] = useState(false);
    const [addProject, setAddProject] = useState(false);
    const [editProject, setEditProject] = useState(false);
    const [showProject, setShowProject] = useState(false);
    const [projectData, setProjectData] = useState(null);
    const [defaultImage, setDefaultImage] = useState(null);
    const [pageIndex, setPageIndex] = useState(1);

    const [cities, setCities] = useState(null);
    const [propertyType, setPropertyType] = useState(null);
    const [condition, setCondition] = useState(null);
    const [currentCondition, setCurrentCondition] = useState(null);
    const [categories, setCategories] = useState(null);

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
                const projectAddress = project?.attributes?.address?.toLowerCase(); // Added line
                if (projectTitle === lowercaseSearchType || projectAddress === lowercaseSearchType) { // Modified line
                    return [project];
                } else if (projectTitle.includes(lowercaseSearchType) || projectAddress.includes(lowercaseSearchType)) { // Modified line
                    return [...filteredProjects, project];
                }
                return filteredProjects;
            }, []);
        } else {
            console.log('projectData is null or not an array');
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
        setAddProject(!addProject);
        setClose(true);
    };

    const dismissHandler = () => {
        setEditProject(false);
        setAddProject(false);
        setClose(false);
    };

    const getProjectsData = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?populate=image,main_img_url&filters[users_permissions_user][id][$eq]=${userId}`);
            setShowProject(false);
            return response.data;

        } catch (error) {
            console.error(error);
            return [];
        }
    };

    const editHandler = async (item) => {
        let id = item.id

        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?filters[id][$eq]=${id}&populate=*`);
            const data = response.data;
            setEditProject(data);

        } catch (error) {
            console.log(error);
        }
    };

    const confirmHandler = (item) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons
            .fire({
                title: 'დაადასტურეთ, რომ ნადვილად გსურთ პროექტის წაშლა',
                text: 'თანხმობის შემთხვევაში, პროექტი წაიშლება',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'წაშლა',
                cancelButtonText: 'უარყოფა',
                reverseButtons: true
            })
            .then((result) => {
                if (result.isConfirmed) {
                    deleteProjectHandler(item);
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire('უარყოფილია', '');
                }
            });
    };

    const deleteProjectHandler = async (item) => {
        const projectId = item.id;
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects/${projectId}`);
            const data = await getProjectsData();
            setProjectData(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    let buttonWrap = (
        <div className={`${styles.buttons} my-6`}>
            <Link
                type="button"
                className="btn btn-primary ghost-btn fw-boldest"
                href='/'>მთავარი გვერდი
            </Link>
            <button
                onClick={addProjectHandler}
                type="button"
                className="btn btn-primary fill-btn fw-boldest"
            >
                <svg className="card-svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 12H13V9H16V7H13V4H11V7H8V9H11V12ZM6 16C5.45 16 4.97917 15.8042 4.5875 15.4125C4.19583 15.0208 4 14.55 4 14V2C4 1.45 4.19583 0.979167 4.5875 0.5875C4.97917 0.195833 5.45 0 6 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H6ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4H2V18H16V20H2Z" fill="white" />
                </svg>
                დაამატე ობიექტი
            </button>
        </div>
    );

    useEffect(() => {
        const getDefaultImage = async () => {
            await axios
                .get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/default-image?populate=NoImage`)

                .then((res) => {
                    const data = res.data;
                    setDefaultImage(data.data.attributes.NoImage.data.attributes.url);
                });
        };

        getDefaultImage();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProjectsData();
            setProjectData(data.data)
        };

        fetchData();
    }, [showProject]);

    useEffect(() => {
        const getCategoriesHandler = async () => {
          try {
            await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/categories`)
              .then((res) => {
                const data = res.data;
                setCategories(data.data)
              })
          } catch (error) {
            console.log(error);
          }
        };
    
        const getCurrentConditionHandler = async () => {
          try {
            await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/current-conditions`)
              .then((res) => {
                const data = res.data;
                setCurrentCondition(data.data)
              })
          } catch (error) {
            console.log(error);
          }
        };
    
        const getConditionHandler = async () => {
          try {
            await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/conditions`)
              .then((res) => {
                const data = res.data;
                setCondition(data.data)
              })
          } catch (error) {
            console.log(error);
          }
        };
    
        const getCitiesHandler = async () => {
          try {
            await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/cities`)
              .then((res) => {
                const data = res.data;
                setCities(data.data)
              })
    
          } catch (error) {
            console.log(error);
          }
        };
    
        const getPropertyTypesHandler = async () => {
          try {
            axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/property-types`)
              .then((res) => {
                const data = res.data;
                setPropertyType(data.data)
              })
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
    

      console.log(projectsToMap, 'hi')
      console.log(projectData, 'data?')
    return (
        <>
            {!isLoggedIn ? (
                <Unauthorized />
            ) : (
                <>
                    <div className="container" style={{ position: 'relative', backgroundColor: 'none'}}>
                        <img className={styles.projectBg} src="/images/projectBg.png" alt="bg" />
                        {projectsToMap?.length > 0 ? buttonWrap : ""}
                        <div className={`${styles.flexWrap} d-flex justify-content-center `}>
                            {/* <BuildingBg /> */}
                            {projectsToMap?.length > 0 ? (
                                projectsToMap.slice(startIndex, endIndex).map((item, index) => {
                                    const id = item?.attributes?.main_img_id;
                                    const imgId = parseInt(id);
                                    const imageWithMainId = item?.attributes?.image?.data?.find(image => image.id === imgId);

                                    return (
                                        <div key={index} className={`card-body ${styles.wrapChild} card`}>
                                            <div className={`${styles.imgWrap} card`} style={{ paddingBottom: '20px' }}>
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
                                                            src={imageWithMainId && process.env.NEXT_PUBLIC_BUILDING_URL + imageWithMainId?.attributes?.url
                                                                ||
                                                                item?.attributes?.image?.data?.[0]?.attributes?.url && process.env.NEXT_PUBLIC_BUILDING_URL + item?.attributes?.image?.data?.[0]?.attributes?.url
                                                                ||
                                                                '/images/test-img.png'
                                                            }
                                                            className="card-img-top"
                                                            alt="project-img"
                                                        />
                                                    </div>
                                                    <div className={`card-body ${styles.cardTtl}`}>
                                                        <div className="card-title fw-boldest">
                                                            {item?.attributes?.title}
                                                        </div>
                                                        <p className="card-text">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#eb445f" className="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></svg>
                                                            {item?.attributes?.address}</p>
                                                    </div>
                                                </Link>
                                                <div className={`${styles.moodalButtons}`}>
                                                    <div onClick={() => editHandler(item)} className={`fill-btn rotate-svg-btn btn btn-primary fw-boldest`}>
                                                        <svg className="card-svg rotate-svg" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.63449 18L7.27297 15.1077C6.95373 15.0115 6.60854 14.8603 6.23739 14.6538C5.86624 14.4474 5.55053 14.2263 5.29027 13.9904L2.62297 15.125L0.757568 11.875L3.06334 10.1365C3.03386 9.95576 3.0095 9.76954 2.99027 9.57788C2.97104 9.38621 2.96142 9.19999 2.96142 9.01923C2.96142 8.85128 2.97104 8.67467 2.99027 8.48942C3.0095 8.30417 3.03386 8.09553 3.06334 7.86348L0.757568 6.125L2.62297 2.91345L5.27104 4.02885C5.56976 3.78013 5.89283 3.55578 6.24027 3.35578C6.5877 3.15578 6.92553 3.00128 7.25374 2.8923L7.63449 0H11.3653L11.7268 2.91153C12.1102 3.04614 12.4489 3.20063 12.7432 3.375C13.0374 3.54935 13.3403 3.7673 13.6518 4.02885L16.3768 2.91345L18.2422 6.125L15.8595 7.92115C15.9147 8.12757 15.9454 8.31699 15.9518 8.48942C15.9582 8.66186 15.9614 8.83205 15.9614 9C15.9614 9.15513 15.955 9.31892 15.9422 9.49135C15.9294 9.66378 15.8999 9.87243 15.8537 10.1173L18.198 11.875L16.3326 15.125L13.6518 13.9712C13.3403 14.2327 13.0268 14.4571 12.7114 14.6442C12.3961 14.8314 12.0679 14.9795 11.7268 15.0885L11.3653 18H7.63449ZM9.47297 11.5C10.1704 11.5 10.7614 11.2577 11.246 10.7731C11.7307 10.2885 11.973 9.69743 11.973 9C11.973 8.30257 11.7307 7.71154 11.246 7.22693C10.7614 6.74231 10.1704 6.5 9.47297 6.5C8.77168 6.5 8.17969 6.74231 7.69699 7.22693C7.21431 7.71154 6.97297 8.30257 6.97297 9C6.97297 9.69743 7.21431 10.2885 7.69699 10.7731C8.17969 11.2577 8.77168 11.5 9.47297 11.5Z" fill="#FCFFE7" />
                                                        </svg>
                                                        რედაქტირება
                                                    </div>
                                                    <div onClick={() => confirmHandler(item)} className="btn red-ghost-btn fw-boldest">
                                                        <svg className="card-svg" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.11537 16C2.65512 16 2.27083 15.8458 1.9625 15.5375C1.65417 15.2291 1.5 14.8448 1.5 14.3846V1.99996H0.5V0.999963H4.5V0.230713H10.5V0.999963H14.5V1.99996H13.5V14.3846C13.5 14.8448 13.3458 15.2291 13.0375 15.5375C12.7292 15.8458 12.3449 16 11.8846 16H3.11537ZM5.30768 13H6.3077V3.99996H5.30768V13ZM8.6923 13H9.69232V3.99996H8.6923V13Z" fill="#EB455F" />
                                                        </svg>
                                                        წაშლა
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <div className={styles.wrap}>
                                    <h2 className={`geo-title `}>პროექტები ვერ მოიძებნა</h2>
                                    {buttonWrap}
                                    {/* <BuildingBg /> */}
                                </div>
                            )}
                        </div>
                        {projectsToMap?.length > itemsPerPage && <nav aria-label="Page navigation example" className="m-5 p-5">
                            <ul className="pagination">
                                <li className="page-item" onClick={handleDecrementPageIndex} value={pageIndex}>
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li className="page-item" onClick={handleChangePageIndex} key={index + 1}>
                                        <a className="page-link" id={index + 1} href="#">
                                            {index + 1}
                                        </a>
                                    </li>
                                ))}
                                <li className="page-item" onClick={handleIncrementPageIndex} value={pageIndex}>
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>}
                    </div>
                    {addProject && <AddProject cities={cities} propertyType={propertyType} condition={condition} categories={categories} currentCondition={currentCondition} setShowProject={setShowProject} dismiss={dismissHandler} />}
                    {editProject && <EditProject cities={cities} propertyType={propertyType} condition={condition} categories={categories} currentCondition={currentCondition} setEditProject={setEditProject} setShowProject={setShowProject} project={editProject} dismiss={dismissHandler} />}
                </>
            )}
        </>
    );
};

export default index;