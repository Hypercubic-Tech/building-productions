import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

import EditProject from "../../components/popup/EditProject";
import AddProject from "../../components/popup/AddProject";
import styles from "../../components/popup/Modal.module.css";

const index = () => {
    const [close, setClose] = useState(false);
    const [addProject, setAddProject] = useState(false);
    const [editProject, setEditProject] = useState(false);
    const [showProject, setShowProject] = useState(false);
    const [projectData, setProjectData] = useState(null);
    console.log(showProject, 'show proj')


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
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?populate=image`)
            .then((res) => {
                const data = res.data;
                setProjectData(data.data)
            });
    };

    useEffect(() => {
        getProjectsData();
    }, [showProject]);

    const editHandler = async (item) => {
        let id = item.id

        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?filters[id][$eq]=${id}&populate=*`);
            const data = response.data;
            setEditProject(data);

        } catch (error) {
            console.log(error)
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
                title: 'Confirm you want to delete project',
                text: 'If you confirm that, project will be deleted',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                cancelButtonText: 'Cancel',
                reverseButtons: true
            })
            .then((result) => {
                if (result.isConfirmed) {
                    deleteProjectHandler(item);
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire('Cancelled', 'error');
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
                <div className={` d-flex justify-content-between m-3 ${styles.mt20}`}>
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
                    {projectData?.length > 0 ? (
                        projectData.map((item, index) => (
                            <div key={index} className={`card-body ${styles.wrapChild} card m-3`}>
                                <div className={`${styles.imgWrap} card`} style={{ paddingBottom: '20px' }}>
                                    <img
                                        onError={(e) => {
                                            e.target.src = "/images/test-img.png";
                                        }}
                                        src={`${process.env.NEXT_PUBLIC_BUILDING_URL}${item?.attributes?.image?.data?.attributes?.url}`}
                                        className="card-img-top"
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
                        ))
                    ) : (
                            <div>
                                {/* style={{height: "85vh"}} */}
                                <h2 className={styles.notFound}>პროექტი ვერ მოიძებნა. დაამატე პროექტი</h2>
                            </div>
                    )}
                </div>
            </div>
            {addProject && <AddProject setShowProject={setShowProject} dismiss={dismissHandler} />}
            {editProject && (
                <EditProject project={editProject} dismiss={dismissHandler} />
            )}
        </>
    );
};

export default index;