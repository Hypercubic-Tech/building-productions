import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import Swal from "sweetalert2";
import LightGallery from 'lightgallery/react';

import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import notify from '../../utils/notify';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const Gallery = ({ setSelect }) => {
    const router = useRouter();
    const projectId = router.query.projectId;
    const lightGallery = useRef(null);
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
                console.log(imgs)
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
                    image: image
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
    
            setImage((prevImages) => {
                if (!Array.isArray(prevImages) || prevImages === undefined) {
                    return [...uploadedImages];
                }
                return [...prevImages, ...uploadedImages];
            });
    
            notify(false, "არჩეული სურათი წარმატებით აიტვირთა");
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
        console.log(imageId, 'image id')
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
                    <input
                        className="btn btn-primary"
                        onChange={(e) => {
                            const files = e.target.files;

                            const fileList = Array.from(files);

                            handleFileUpload(fileList);
                        }}
                        type="file"
                        name="avatar"
                        multiple
                    />
                    <div className="modal-body mx-5 mx-xl-15 my-7 d-flex flex-wrap">
                        <form id="kt_modal_add_user_form" className="form">
                            <span className="svg-icon svg-icon-2tx svg-icon-warning me-4 ">
                                {projectImgs && (
                                    <LightGallery plugins={[lgThumbnail, lgZoom]} elementClassNames="custom-class-name">
                                        {projectImgs.map((projectImg, index) => (
                                            <a
                                                key={projectImg?.id}
                                                href={`${process.env.NEXT_PUBLIC_BUILDING_URL}${projectImg?.attributes?.url}`}
                                                className="gallery-item"
                                                onClick={toggleHandler}
                                            >
                                                <img src={`${process.env.NEXT_PUBLIC_BUILDING_URL}${projectImg?.attributes?.url}`} className="img-responsive" />
                                            </a>
                                        ))}
                                    </LightGallery>
                                )}
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;


// bakcup

