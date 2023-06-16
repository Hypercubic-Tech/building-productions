import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";

import EditProject from "../../components/popup/EditProject";
import AddProject from "../../components/popup/AddProject";
import styles from "../../components/popup/Modal.module.css";

const index = () => {
    const [close, setClose] = useState(false);
    const [addProject, setAddProject] = useState(false);
    const [editProject, setEditProject] = useState(false);
    const [showProject, setShowProject] = useState(false);
    const [projectData, setProjectData] = useState(null);
    const [pageIndex, setPageIndex] = useState(1);

    const userId = useSelector(state => state.auth.user_id)
    const searchValue = useSelector(state => state.proj.searchType)
    let itemsPerPage = 8;

    let projectsToMap = projectData;

    if (searchValue) {
        const lowercaseSearchType = searchValue.toLowerCase();
        projectsToMap = projectData.reduce((filteredProjects, project) => {
            const projectTitle = project?.attributes?.title?.toLowerCase();
            if (projectTitle === lowercaseSearchType) {
                return [project];
            } else if (projectTitle.includes(lowercaseSearchType)) {
                return [...filteredProjects, project];
            }
            return filteredProjects;
        }, []);
    }

    const totalPages = Math.ceil(projectsToMap?.length / itemsPerPage);
    const startIndex = (pageIndex - 1) * itemsPerPage;
    const endIndex = pageIndex * itemsPerPage;

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
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?populate=image&filters[users_permissions_user][id][$eq]=${userId}`);
            setShowProject(false);
            return response.data;

        } catch (error) {
            console.error(error);
            return [];
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            const data = await getProjectsData();
            setProjectData(data.data)
        };

        fetchData();
    }, [showProject]);

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
            await axios.delete(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects/${projectId}`)
                .then(() => {
                    getProjectsData();
                })
        } catch (error) {
            console.log(error);
        }
    };

    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <>
            <div className="container-xxl">
                <div className={` d-flex justify-content-between ${styles.mt20}`}>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleGoBack}>უკან დაბრუნება</button>
                    <button
                        onClick={addProjectHandler}
                        type="button"
                        className="btn btn-primary"
                    >
                        დაამატე ობიექტი
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-plus"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 3a.5.5 0 0 1 .5.5v3.5h3a.5.5 0 0 1 0 1h-3v3.5a.5.5 0 0 1-1 0V8h-3a.5.5 0 0 1 0-1h3V3.5A.5.5 0 0 1 8 3z" />
                        </svg>
                    </button>
                </div>
                <div className={`${styles.flexWrap} d-flex justify-content-center `}>
                    {projectsToMap?.length > 0 ? (
                        projectsToMap.slice(startIndex, endIndex).map((item, index) => {
                            return (
                                <div key={index} className={`card-body ${styles.wrapChild} card m-3`}>
                                    <div className={`${styles.imgWrap} card`} style={{ paddingBottom: '20px' }}>
                                        <img
                                            onError={(e) => {
                                                e.target.src = "/images/test-img.png";
                                            }}
                                            src={`${process.env.NEXT_PUBLIC_BUILDING_URL}${item?.attributes?.image?.data?.[0]?.attributes?.url}` || "/images/test-img.png"}
                                            className="card-img-top"
                                            alt="project-img"
                                        />
                                        <div className="card-body">
                                            <Link
                                                href={{
                                                    pathname: `/projects/${item?.id}`,
                                                    query: { projectId: item?.id },
                                                }}
                                                passHref
                                                className="card-title"
                                            >
                                                {item?.attributes?.title}
                                            </Link>
                                            <p className="card-text">{item?.attributes?.address}</p>
                                        </div>
                                        <div className={`${styles.gap20} row`}>
                                            <div onClick={() => editHandler(item)} className={`btn btn-primary`}>
                                                რედაქტირება
                                            </div>
                                            <div onClick={() => confirmHandler(item)} className="btn btn-danger">
                                                წაშლა
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div>
                            <h2 className={` ${styles.notFound} geo-title `}>პროექტი ვერ მოიძებნა. დაამატე პროექტი</h2>
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
            {addProject && <AddProject setShowProject={setShowProject} dismiss={dismissHandler} />}
            {editProject && <EditProject setEditProject={setEditProject} setShowProject={setShowProject} project={editProject} dismiss={dismissHandler} />}
        </>
    );
};

export default index;