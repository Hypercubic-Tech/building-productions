import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';
import Swal from "sweetalert2";
import LightGallery from 'lightgallery/react';

import { selectProjectImage, setProjectGalleryImages } from '../../store/slices/projectSlice';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import notify from '../../utils/notify';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const Gallery = ({ setSelect }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const projectId = router.query.projectId;
    const projectImages = useSelector(state => state.proj.galleryImages);
    const [imgSrc, setImgSrc] = useState(null);
    const [projectImgs, setProjectImgs] = useState(null);
    const [image, setImage] = useState(null);
    const [imageState, setImageState] = useState(false);
    const [projectData, setProjectData] = useState({
        image: image
    });

    const getProductsHandler = async () => {
        await axios
            .get(
                `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?populate=image`
            )
            .then((res) => {
                const data = res.data
                let imgs = data.data[0].attributes.image.data;
                setProjectImgs(imgs)
            })
    };

    useEffect(() => {
        if (projectId) {
            getProductsHandler();
        }
    }, [projectId]);

    const handleUpdateProjectImage = useCallback(async () => {
        try {
            await axios.put(
                `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects/${projectId}`,
                {
                    data: projectData,
                    image: image,
                }
            ).then(() => {
                getProductsHandler();
            });
        } catch (err) {
            console.error(err);
        }
    }, [projectId, projectData, image]);

    const handleMediaUpload = useCallback(async (fileList) => {
        try {
            const uploadPromises = fileList.map((file) => {
                const formData = new FormData();
                formData.append("files", file);

                return axios.post(
                    `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/upload`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
            });

            const uploadResponses = await Promise.all(uploadPromises);
            const uploadedImages = uploadResponses.map((response) => response.data[0]);
            dispatch(setProjectGalleryImages(uploadedImages));

            setImage((prevImages) => {
                if (!Array.isArray(prevImages) || prevImages === undefined) {
                    return [...uploadedImages];
                }
                return [...prevImages, ...uploadedImages];
            });
            notify(false, "არჩეული სურათი წარმატებით აიტვირთა");

            localStorage.setItem('projectImage', JSON.stringify(image));
        } catch (err) {
            notify(true, "სურათების ატვირთვა უარყოფილია");
            console.error(err);
        }
    }, [setImage]);

    useEffect(() => {
        if (imgSrc && !image) {
            handleMediaUpload();
        }
    }, [imgSrc, image, handleMediaUpload]);

    useEffect(() => {
        setProjectData((prevProductData) => ({
            ...prevProductData,
            image: image,
        }));
    }, [image]);

    useEffect(() => {
        if (image) {
            handleUpdateProjectImage();
        }
    }, [image, handleUpdateProjectImage]);

    const handleFileUpload = (fileList) => {
        if (!fileList || fileList.length === 0) {
            return;
        }
        handleMediaUpload(fileList);
    };

    const confirmHandler = (imageId) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        });

        swalWithBootstrapButtons
            .fire({
                title: 'დაადასტურეთ, რომ გსურთ სურათის წაშლა',
                text: 'დადასტურის შემთხვევაში, სურათი წაიშლება',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'წაშლა',
                cancelButtonText: 'უარყოფა',
                reverseButtons: true
            })
            .then((result) => {
                if (result.isConfirmed) {
                    handleDeleteImage(imageId);
                    notify(false, "სურათი წაიშალა")
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire('ოპერაცია უარყოფილია', 'Error');
                }
            });
    };

    const handleDeleteImage = async (imageId) => {
        await axios.delete(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/upload/files/${imageId}`)
            .then(() => {
                getProductsHandler()
            })
        setImgSrc(null);
    };

    const toggleHandler = () => {
        if (!imageState) {
            setImageState(false)
        } else {
            setImageState(true)
        }
    }

    return (
        <div className="modal fade show" style={{ zIndex: imageState ? "0" : "100" }}>
            <div className="modal modal-dialog-centered custom-width">
                <div className="modal-content custom-width" style={{ width: "90% ", height: "90%", margin: "5%" }}>
                    <div className="modal-header" id="kt_modal_add_user_header">
                        <h3>სურათები</h3>
                        <div
                            className="btn btn-icon btn-sm btn-active-icon-primary"
                            data-kt-users-modal-action="close"
                            style={{ marginLeft: "90%" }}
                        >
                            <span
                                className="svg-icon svg-icon-1"
                                onClick={() => {
                                    setSelect(null);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <rect
                                        opacity="0.5"
                                        x={6}
                                        y="17.3137"
                                        width={16}
                                        height={2}
                                        rx={1}
                                        transform="rotate(-45 6 17.3137)"
                                        fill="black"
                                    />
                                    <rect
                                        x="7.41422"
                                        y={6}
                                        width={16}
                                        height={2}
                                        rx={1}
                                        transform="rotate(45 7.41422 6)"
                                        fill="black"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="modal-body mx-5 mx-xl-15 my-7 d-flex flex-wrap">
                        <form id="kt_modal_add_user_form" className="form">
                            <div style={{
                                    flexDirection: "column"
                                }}
                                className="svg-icon svg-icon-2tx svg-icon-warning me-4 d-flex justify-content-center align-items-center">
                                <button className="btn btn-primary georgian image-input"
                                    style={{
                                        position: "absolute",
                                        right: "50px",
                                        top: "0",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100px",
                                        height: "100px"
                                    }}
                                    data-kt-image-input="true">
                                    <div style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        flexDirection: "column-reverse",
                                        cursor: "pointer"
                                    }}
                                    >
                                        <input
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                overflow: "hidden",
                                                zIndex: "0",
                                                opacity: "0",
                                                top: "0px",
                                                position: "absolute",
                                                cursor: "pointer"
                                            }}
                                            onChange={(e) => {
                                                const files = e.target.files;

                                                const fileList = Array.from(files);

                                                handleFileUpload(fileList);
                                            }}
                                            type="file"
                                            name="avatar"
                                            multiple />
                                        <span>ფოტოს დამატება</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                        </svg>
                                    </div>
                                    {/* <div className="image-input-wrapper w-125px h-125px"></div> */}
                                </button>

                                {projectImages && (
                                    <LightGallery plugins={[lgThumbnail, lgZoom]} elementClassNames="custom-class-name">
                                        {projectImages.map((projectImg, index) => (
                                            <a
                                                key={projectImg?.id}
                                                href={`${process.env.NEXT_PUBLIC_BUILDING_URL}${projectImg?.url}`}
                                                className="gallery-item"
                                                onClick={toggleHandler}
                                            >
                                                <div>
                                                    {/* <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="flexCheckDefault"
                                                    /> */}
                                                </div>
                                                <div style={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    maxWidth: "100%",
                                                    height: "auto",
                                                    margin: "20px"
                                                }}>
                                                <img
                                                    src={`${process.env.NEXT_PUBLIC_BUILDING_URL}${projectImg?.url}`}
                                                    className="img-responsive col-sm"
                                                    style={{
                                                        width: "50%",
                                                        height: "auto",
                                                        marginLeft: "auto",
                                                        marginRight: "auto",
                                                        objectFit: "contain"
                                                    }}
                                                />
                                                    </div>
                                            </a>
                                        ))}
                                    </LightGallery>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;


