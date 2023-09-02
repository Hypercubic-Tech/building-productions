import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import Swal from "sweetalert2";
import LightGallery from 'lightgallery/react';

import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import notify from '../../utils/notify';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import styles from './Gallery.module.css'

const Gallery = ({ setSelect }) => {
    const router = useRouter();
    const { projectId } = router.query;

    const [imgSrc, setImgSrc] = useState(null);
    const [image, setImage] = useState([]);
    const [isImageUpload, setIsImageUpload] = useState(false);
    const [isProjectImages, setIsProjectImages] = useState([]);
    const [isImageState, setIsImageState] = useState(false);

    const [choosedImage, setChoosedImage] = useState(null);

    const getProductsHandler = async () => {
        await axios
            .get(
                `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?filters[id][$eq]=${projectId}&populate=image`
            )
            .then((res) => {
                const data = res.data
                setIsProjectImages(data?.data[0]?.attributes?.image?.data)
            })
    };

    const handleMediaUpload = async (files) => {
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
                    getProductsHandler();
                    notify(false, "არჩეული სურათები წარმატებით აიტვირთა");
                });
        } catch (err) {
            console.error(err);
            notify(true, "სურათების ატვირთვა უარყოფილია");
        }
    };

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
        console.log(imageId);
        await axios.delete(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/upload/files/${imageId}`)
            .then(() => {
                getProductsHandler()
            })
        setImgSrc(null);
    };

    const setMainPicture = async () => {
        await axios.put(
            `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects/${projectId}`,
            {
                data: {
                    main_img_url: choosedImage
                },
            }
        )
            .then((res) => {
                notify(false, "ფოტოსურათი წარმატებით დაყენდა მთავარ ფოტოდ");
                getProductsHandler();
            });
    };

    const choosedMainImg = (url) => {
        setChoosedImage(url);

        if(choosedImage === url) {
            setMainPicture();
        }
    };
    console.log(choosedImage, 'choosen one')

    useEffect(() => {
        if (isImageUpload) {
            const userImageUpload = async () => {
                await axios.put(
                    `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects/${projectId}`,
                    {
                        data: {
                            image: image.map((p) => p.id),
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

    useEffect(() => {
        if (projectId) {
            getProductsHandler();
        }
    }, [projectId]);

    return (
        <div className="modal fade show" style={{ zIndex: isImageState ? "0" : "100" }}>
            <div className="modal modal-dialog-centered custom-width">
                <div className="modal-content custom-width">
                    <div className={`modal-header container py-sm-10 px-sm-10 ${styles.modalHeader}`} >
                        <h2>სურათები</h2>
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
                                                            handleMediaUpload(e.target.files);
                                                        }}
                                                        type="file"
                                                        name="avatar"
                                                        multiple />
                                                    <span className='fw-boldest'>ფოტოს დამატება</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                                        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                                                        <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            {isProjectImages && isProjectImages?.map((projectImg, index) => {
                                                console.log(projectImg , 'iomg')
                                                return (
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
                                                            <div onClick={() => choosedMainImg(projectImg?.attributes?.url)} className={styles.galleryItemBtn}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                                            </div>
                                                            <div onClick={() => confirmHandler(projectImg?.id)} className={styles.galleryItemBtn}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="#EB455F"></rect><rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="#EB455F"></rect></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
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

export default Gallery;


