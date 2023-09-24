import { useState, useEffect } from 'react'
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

import styles from './Gallery.module.css';

const Drawings = ({ setSelect }) => {
    const router = useRouter();
    const { projectId } = router.query;

    const [imgSrc, setImgSrc] = useState(null);
    const [image, setImage] = useState([]);
    const [isImageUpload, setIsImageUpload] = useState(false);
    const [isProjectImages, setIsProjectImages] = useState([]);
    const [isImageState, setIsImageState] = useState(false);

    const getProductsHandler = async () => {
        await axios
            .get(
                `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?filters[id][$eq]=${projectId}&populate=drawing`
            )
            .then((res) => {
                const data = res.data
                setIsProjectImages(data?.data[0]?.attributes?.drawing?.data)
            })
    };

    useEffect(() => {
        if (projectId) {
            getProductsHandler();
        }
    }, [projectId]);

    const handleMediaUpload = async (files) => {
        let upload_input = document.getElementById("fileInput");


        if (!files) {
            return;
        }

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            formData.append("files", file);
        }

        try {
            await axios
                .post(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/upload`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then((res) => {
                    const newImages = isProjectImages ? [...image, ...isProjectImages, ...res.data] : [...image, ...res.data];
                    setImage(newImages);
                    setImgSrc(newImages[0].url);
                    setIsImageUpload(true);
                    notify(false, "არჩეული ნახაზი წარმატებით აიტვირთა");
                });
        } catch (err) {
            console.log(err);
            notify(true, "ნახაზის ატვირთვა უარყოფილია");
        }
    };

    useEffect(() => {
        if (isImageUpload) {
            const userImageUpload = async () => {
                await axios.put(
                    `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects/${projectId}`,
                    {
                        data: {
                            drawing: image.map((p) => p.id),
                        },
                    }
                )
                    .then(() => {
                        getProductsHandler();
                    });
            };
            userImageUpload();
        }
    }, [isImageUpload, image]);

    const toggleImages = () => {
        if (!isImageState) {
            setIsImageState(false)
        } else {
            setIsImageState(true)
        }
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

    return (
        <div className="modal fade show" style={{ zIndex: isImageState ? "0" : "100" }}>
            <div className="modal modal-dialog-centered custom-width">
                <div className="modal-content custom-width">
                    <div className={`modal-header container py-sm-10 px-sm-10 ${styles.modalHeader}`} >
                        <h2>ნახაზები</h2>
                        <div
                            className={`${styles.modalClose}`}
                            data-kt-users-modal-action="close"
                            onClick={() => {
                                setSelect(null);
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={35}
                                height={35}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <rect
                                    x={6}
                                    y="17.3137"
                                    width={16}
                                    height={2}
                                    rx={1}
                                    transform="rotate(-45 6 17.3137)"
                                    fill="#EB455F"
                                />
                                <rect
                                    x="7.41422"
                                    y={6}
                                    width={16}
                                    height={2}
                                    rx={1}
                                    transform="rotate(45 7.41422 6)"
                                    fill="#EB455F"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="modal-body d-flex flex-wrap  py-sm-10 px-sm-10 container">
                        <form id="kt_modal_add_user_form" className="form" style={{ width: '100%' }}>
                            <div style={{
                                flexDirection: "column"
                            }}
                                className="svg-icon svg-icon-2tx svg-icon-warning me-4 d-flex justify-content-center align-items-center">


                                {(
                                    <LightGallery plugins={[lgThumbnail, lgZoom]} className={styles.galleryItems} elementClassNames="custom-class-name" selector=".gallery-item">
                                        <div className={styles.galleryItems}>
                                            <div className={`${styles.galleryItem}`}>
                                                <div className={`${styles.addBtn}`}>
                                                    <input
                                                        id='fileInput'
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
                                                            const modifiedFiles = Array.from(files).map((file) => {
                                                                const randomText = Math.random().toString(36).substring(7); // Generate random text
                                                                const fileName = `${randomText}_${file.name}`; // Combine random text with original file name
                                                                return new File([file], fileName, { type: file.type }); // Create a new File object with modified name
                                                            });
                                                            handleMediaUpload(modifiedFiles);
                                                        }}
                                                        type="file"
                                                        name="avatar"
                                                        multiple />
                                                    <span className='fw-boldest'>ნახაზის ატვირთვა</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <g stroke="#1C274C" strokeLinecap="round" strokeWidth="1.5">
                                                            <path strokeLinejoin="round" d="M12 15V2m0 0l3 3.5M12 2L9 5.5"></path>
                                                            <path d="M8 22h8c2.828 0 4.243 0 5.121-.878C22 20.242 22 18.829 22 16v-1c0-2.828 0-4.242-.879-5.121-.768-.768-1.946-.865-4.121-.877m-10 0c-2.175.012-3.353.109-4.121.877C2 10.758 2 12.172 2 15v1c0 2.829 0 4.243.879 5.122.3.3.662.497 1.121.627"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            {isProjectImages?.map((projectImg, index) => (
                                                <div key={index} className={styles.galleryItem}>
                                                    <a
                                                        key={projectImg?.id}
                                                        href={`${process.env.NEXT_PUBLIC_BUILDING_URL}${projectImg?.attributes?.url}`}
                                                        className={`gallery-item`}
                                                        onClick={toggleImages}
                                                    >
                                                        <div className={styles.galleryItemImg}>
                                                            <img
                                                                key={index}
                                                                src={`${process.env.NEXT_PUBLIC_BUILDING_URL}${projectImg?.attributes?.url}`}
                                                                className="img-responsive col-sm"
                                                            />
                                                        </div>
                                                    </a>
                                                    <div className={styles.galleryItemBtns}>
                                                        {/* <div className={styles.galleryItemBtn}>
                                                            <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                                        </div> */}
                                                        <div onClick={() => confirmHandler(projectImg?.id)} className={styles.galleryItemBtn}>
                                                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M3.11537 16C2.65512 16 2.27083 15.8458 1.9625 15.5375C1.65417 15.2291 1.5 14.8448 1.5 14.3846V1.99996H0.5V0.999963H4.5V0.230713H10.5V0.999963H14.5V1.99996H13.5V14.3846C13.5 14.8448 13.3458 15.2291 13.0375 15.5375C12.7292 15.8458 12.3449 16 11.8846 16H3.11537ZM5.30768 13H6.3077V3.99996H5.30768V13ZM8.6923 13H9.69232V3.99996H8.6923V13Z" fill="#EB455F" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                            ))}
                                        </div>
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

export default Drawings;


