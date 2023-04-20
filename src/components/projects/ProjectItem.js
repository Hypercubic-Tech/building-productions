import Link from "next/link";

const ProjectItem = ({ data }) => {
    return (
        <div className="toolbar py-5 py-lg-5" id="kt_toolbar">
            <div
                id="kt_toolbar_container"
                className="container-xxl d-flex flex-stack flex-wrap"
            >
                <Link href={`/projects/${data._id}`} className="page-title d-flex flex-column me-3">
                    <h1 className="d-flex text-dark fw-bolder my-1 fs-3 georgian">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-geo-alt-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        &nbsp;{data.addres}
                    </h1>
                    <ul className="breadcrumb breadcrumb-dot fw-bold text-gray-600 fs-7 my-1">
                        <li className="breadcrumb-item text-gray-600 georgian">
                            {data.type}
                        </li>
                        <li className="breadcrumb-item text-gray-600 georgian">
                            {data.status}
                        </li>
                        <li className="breadcrumb-item text-gray-600 georgian">
                            {data.m2}
                        </li>
                        <li className="breadcrumb-item text-warning georgian">
                            {data.time}
                        </li>
                    </ul>
                </Link>
                <div className="d-flex align-items-center py-2 py-md-1">
                    <div className="me-3">
                        <a
                            href="#"
                            className="btn btn-light-primary fw-bolder georgian"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                        >
                            <i className="bi bi-image-fill" />
                            სურათები
                        </a>
                        <div
                            className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                            data-kt-menu="true"
                            id="kt_menu_61484d4eae1ca"
                        ></div>
                    </div>
                    <div className="d-flex align-items-center py-2 py-md-1">
                        <a
                            href="#"
                            className="btn btn-primary fw-bolder georgian"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_create_app"
                            id="kt_toolbar_primary_button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-rulers"
                                viewBox="0 0 16 16"
                            >
                                <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                            </svg>
                            ნახაზები
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;