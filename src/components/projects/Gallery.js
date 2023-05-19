import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';

const Gallery = ({ setSelect }) => {
    const router = useRouter();
    const projectId = router.query.projectId;

    const [imgSrc, setImgSrc] = useState(null);
    const [projectImgs, setProjectImgs] = useState(null);

    const getProductsHandler = async () => {
        await axios
          .get(
            `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects?populate[1]=image&filters[id][$in][2]=${projectId}`
            // http://localhost:1337/api/projects?filters[id][$eq]=2&populate[image][populate]=id
          )
          .then((res) => {
            const data = res.data
            let imgs =data.data[0].attributes.image.data;
            setProjectImgs(imgs)
            console.log(data, 'primgdata')
          })
      };
    
      useEffect(() => {
        if (projectId) {
          getProductsHandler();
        };
      }, [projectId]);

    return (
        <div className="modal fade show">
            <div className="modal modal-dialog-centered custom-width">
            <div className="modal-content custom-width" style={{ width: "90% ", height: "90%", margin: "5%" }}>
                    <div className="modal-header" id="kt_modal_add_user_header">
                        <div
                            className="btn btn-icon btn-sm btn-active-icon-primary"
                            data-kt-users-modal-action="close"
                            style={{marginLeft: "95%" }}
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
                    <div  className="modal-body mx-5 mx-xl-15 my-7 d-flex flex-wrap">
                        <form id="kt_modal_add_user_form" className="form">
                            <span className="svg-icon svg-icon-2tx svg-icon-warning me-4 ">
                                {projectImgs && projectImgs.map((projectImg, index) => {
                                    return (
                                        <div className="image-input image-input-outline m-4" data-kt-image-input="true" key={index} >
                                             <img
                                                src={`${process.env.NEXT_PUBLIC_BUILDING_URL}${projectImg.attributes.url}`}
                                                width={300}
                                                height={300}
                                                style={{borderRadius: "8px"}}
                                                alt="Picture of the product"
                                            />
                                            <span
                                                className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                data-kt-image-input-action="remove"
                                                data-bs-toggle="tooltip"
                                                title="Remove avatar"
                                                onClick={() => {
                                                    let result = projectImgs.splice(index + 1 );
                                                    setProjectImgs(result)
                                                }}
                                                >
                                                <input
                                                    type="hidden" name="avatar_remove" />
                                                <i className="bi bi-x fs-2" />
                                            </span>
                                        </div>
                                    );
                                })}
                                <div className="image-input image-input-outline m-4">
                                    {imgSrc ? <img 
                                        src={`${imgSrc}`}
                                        width={300}
                                        height={300}
                                        style={{borderRadius: "8px"}}
                                        alt="Picture of the product"
                                    /> 
                                    : 
                                    <div className=" w-300px h-300px" >
                                        add new poto
                                    </div>
                                    }
                                    <label
                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                        data-kt-image-input-action="change"
                                        data-bs-toggle="tooltip"
                                        title="Change avatar"
                                    >
                                        <i className="bi bi-pencil-fill fs-7" />
                                        <input
                                            onChange={(e) => {
                                            console.log(e.target.files[0])
                                            setImgSrc(e.target.files[0])
                                            const file = e.target.files[0];
                                            const reader = new FileReader();

                                            reader.onload = (event) => {
                                                setImgSrc(event.target.result);
                                            };

                                            reader.readAsDataURL(file);
                                        }}
                                        type="file"
                                        name="product"
                                        accept=".png, .jpg, .jpeg"
                                        />
                                    </label>
                                    <span
                                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                        data-kt-image-input-action="remove"
                                        data-bs-toggle="tooltip"
                                        title="Remove avatar"
                                        onClick={() => {
                                            setImgSrc(null)
                                        }}
                                        >
                                        <input
                                            type="hidden" name="avatar_remove" />
                                        <i className="bi bi-x fs-2" />
                                    </span>
                                </div>
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

