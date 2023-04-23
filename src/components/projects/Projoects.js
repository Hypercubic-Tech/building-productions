import { useEffect } from "react";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import ProjectItem from "./ProjectItem";

const res = [
  {
      addres: 'wereteli 112',
      _id: 'rame',
      m2: '40m2',
      type: 'bina',
      time: '29.03.2023 - 29.05.2023',
      status: 'shavi'
  },
  {
      addres: 'wereteli 112',
      _id: 'rume',
      m2: '40m2',
      type: 'bina',
      time: '29.03.2023 - 29.05.2023',
      status: 'shavi'
  },
  {
      addres: 'wereteli 112',
      _id: 'rome',
      m2: '40m2',
      type: 'bina',
      time: '29.03.2023 - 29.05.2023',
      status: 'shavi'
  }
];

const Projects = () => {
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const getProjects = async () => {
      await axiosPrivate.get("/api/admin/projects/get_projects");
    };

    getProjects();
  }, []);

  return (
    <>
      <div
        className="wrapper d-flex flex-column flex-row-fluid"
        id="kt_wrapper"
      >
        <div
          id="kt_header"
          className="header"
          data-kt-sticky="true"
          data-kt-sticky-name="header"
          data-kt-sticky-offset="{default: '200px', lg: '300px'}"
        >
          <div
            className="header-menu-container container-xxl d-flex flex-stack h-lg-75px"
            id="kt_header_nav"
          >
            <div
              className="header-menu flex-column flex-lg-row"
              data-kt-drawer="true"
              data-kt-drawer-name="header-menu"
              data-kt-drawer-activate="{default: true, lg: false}"
              data-kt-drawer-overlay="true"
              data-kt-drawer-width="{default:'200px', '300px': '250px'}"
              data-kt-drawer-direction="start"
              data-kt-drawer-toggle="#kt_header_menu_toggle"
              data-kt-swapper="true"
              data-kt-swapper-mode="prepend"
              data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
            >
              <div
                className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch flex-grow-1"
                id="#kt_header_menu"
                data-kt-menu="true"
              >
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item here show menu-lg-down-accordion me-lg-1"
                >
                  <a
                    className="menu-link active py-3"
                    href="../../demo11/dist/index.html"
                  >
                    <span className="menu-title georgian">
                      <i className="bi bi-plug-fill" /> ელექტროობა
                    </span>
                  </a>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-lg-1"
                >
                  <span className="menu-link py-3">
                    <span className="menu-title georgian">
                      <i className="bi bi-droplet-half" /> &nbsp;სანტექნიკა
                    </span>
                  </span>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-lg-1"
                >
                  <span className="menu-link py-3">
                    <span className="menu-title georgian">
                      <i className="bi bi-hammer" />
                      &nbsp;დემონტაჟი
                    </span>
                  </span>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-lg-1"
                >
                  <span className="menu-link py-3">
                    <span className="menu-title georgian">
                      <i className="bi bi-palette2" />
                      &nbsp;სამღებრო
                    </span>
                  </span>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-lg-1"
                >
                  <span className="menu-link py-3">
                    <span className="menu-title georgian">
                      <i className="bi bi-thermometer-sun" />
                      &nbsp;გათბობა
                    </span>
                  </span>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-lg-1"
                >
                  <span className="menu-link py-3">
                    <span className="menu-title georgian">
                      <i className="bi bi-layers-fill" />
                      &nbsp;კაფელ-მეტლახი
                    </span>
                  </span>
                </div>
                <div
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-lg-1"
                >
                  <span className="menu-link py-3">
                    <span className="menu-title georgian">
                      <i className="bi bi-star-fill" />
                      &nbsp;<b>ჯამური განფასება</b>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        {res.map(item => {
          return <ProjectItem key={item._id} data={item} />
        })}

      </div>
      {/* <div
        id="kt_drawer_chat"
        className="bg-body"
        data-kt-drawer="true"
        data-kt-drawer-name="chat"
        data-kt-drawer-activate="true"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'300px', 'md': '500px'}"
        data-kt-drawer-direction="end"
        data-kt-drawer-toggle="#kt_drawer_chat_toggle"
        data-kt-drawer-close="#kt_drawer_chat_close"
      >
        <div className="card w-100 rounded-0" id="kt_drawer_chat_messenger">
          <div
            className="card-header pe-5"
            id="kt_drawer_chat_messenger_header"
          >
            <div className="card-toolbar">
              <div className="me-2">
                <button
                  className="btn btn-sm btn-icon btn-active-light-primary"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <i className="bi bi-three-dots fs-3" />
                </button>
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
                  data-kt-menu="true"
                >
                  <div className="menu-item px-3">
                    <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                      Contacts
                    </div>
                  </div>
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_users_search"
                    >
                      Add Contact
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link flex-stack px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_invite_friends"
                    >
                      Invite Contacts
                      <i
                        className="fas fa-exclamation-circle ms-2 fs-7"
                        data-bs-toggle="tooltip"
                        title="Specify a contact email to send an invitation"
                      />
                    </a>
                  </div>
                  <div
                    className="menu-item px-3"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="right-start"
                  >
                    <a href="#" className="menu-link px-3">
                      <span className="menu-title">Groups</span>
                      <span className="menu-arrow" />
                    </a>
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link px-3"
                          data-bs-toggle="tooltip"
                          title="Coming soon"
                        >
                          Create Group
                        </a>
                      </div>
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link px-3"
                          data-bs-toggle="tooltip"
                          title="Coming soon"
                        >
                          Invite Members
                        </a>
                      </div>
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link px-3"
                          data-bs-toggle="tooltip"
                          title="Coming soon"
                        >
                          Settings
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item px-3 my-1">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-bs-toggle="tooltip"
                      title="Coming soon"
                    >
                      Settings
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="btn btn-sm btn-icon btn-active-light-primary"
                id="kt_drawer_chat_close"
              >
                <span className="svg-icon svg-icon-2">
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
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="kt_modal_invite_friends"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog mw-650px">
          <div className="modal-content">
            <div className="modal-header pb-0 border-0 justify-content-end">
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <span className="svg-icon svg-icon-1">
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
            <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
              <div className="text-center mb-13">
                <h1 className="mb-3">Invite a Friend</h1>
                <div className="text-muted fw-bold fs-5">
                  If you need more info, please check out
                  <a href="#" className="link-primary fw-bolder">
                    FAQ Page
                  </a>
                  .
                </div>
              </div>
              <div className="btn btn-light-primary fw-bolder w-100 mb-8">
                <img
                  alt="Logo"
                  src="assets/media/svg/brand-logos/google-icon.svg"
                  className="h-20px me-3"
                />
                Invite Gmail Contacts
              </div>
              <div className="separator d-flex flex-center mb-8">
                <span className="text-uppercase bg-body fs-7 fw-bold text-muted px-3">
                  or
                </span>
              </div>
              <textarea
                className="form-control form-control-solid mb-8"
                rows={3}
                placeholder="Type or paste emails here"
                defaultValue={""}
              />
              <div className="mb-10">
                <div className="fs-6 fw-bold mb-2">Your Invitations</div>
                <div className="mh-300px scroll-y me-n7 pe-7">
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/150-1.png" />
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Emma Smith
                        </a>
                        <div className="fw-bold text-muted">
                          e.smith@kpmg.com.au
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-bold">
                          M
                        </span>
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Melody Macy
                        </a>
                        <div className="fw-bold text-muted">
                          melody@altbox.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="selected">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/150-26.jpg" />
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Max Smith
                        </a>
                        <div className="fw-bold text-muted">max@kt.com</div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/150-4.jpg" />
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Sean Bean
                        </a>
                        <div className="fw-bold text-muted">
                          sean@dellito.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-bold">
                          O
                        </span>
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Olivia Wild
                        </a>
                        <div className="fw-bold text-muted">
                          olivia@corpmail.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-primary text-primary fw-bold">
                          N
                        </span>
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Neil Owen
                        </a>
                        <div className="fw-bold text-muted">
                          owen.neil@gmail.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="selected">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/150-6.jpg" />
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Dan Wilson
                        </a>
                        <div className="fw-bold text-muted">
                          dam@consilting.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-bold">
                          E
                        </span>
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Emma Bold
                        </a>
                        <div className="fw-bold text-muted">
                          emma@intenso.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/150-7.jpg" />
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Ana Crown
                        </a>
                        <div className="fw-bold text-muted">
                          ana.cf@limtel.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="selected">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-info text-info fw-bold">
                          A
                        </span>
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Robert Doe
                        </a>
                        <div className="fw-bold text-muted">
                          robert@benko.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/150-17.jpg" />
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          John Miller
                        </a>
                        <div className="fw-bold text-muted">
                          miller@mapple.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-success text-success fw-bold">
                          L
                        </span>
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Lucy Kunic
                        </a>
                        <div className="fw-bold text-muted">
                          lucy.m@fentech.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/150-10.jpg" />
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Ethan Wilder
                        </a>
                        <div className="fw-bold text-muted">
                          ethan@loop.com.au
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="selected">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-info text-info fw-bold">
                          A
                        </span>
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Robert Doe
                        </a>
                        <div className="fw-bold text-muted">
                          robert@benko.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-stack">
                <div className="me-5 fw-bold">
                  <label className="fs-6">Adding Users by Team Members</label>
                  <div className="fs-7 text-muted">
                    If you need more info, please check budget planning
                  </div>
                </div>
                <label className="form-check form-switch form-check-custom form-check-solid">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue={1}
                    defaultChecked="checked"
                  />
                  <span className="form-check-label fw-bold text-muted">
                    Allowed
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="kt_modal_create_app"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered mw-900px">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="georgian">ობიექტის დამატება</h2>
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <span className="svg-icon svg-icon-1">
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
            <div className="modal-body py-lg-10 px-lg-10">
              <div
                className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
                id="kt_modal_create_app_stepper"
              >
                <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                  <div className="stepper-nav ps-lg-10">
                    <div
                      className="stepper-item current"
                      data-kt-stepper-element="nav"
                    >
                      <div className="stepper-line w-40px" />
                      <div className="stepper-icon w-40px h-40px">
                        <i className="stepper-check fas fa-check" />
                        <span className="stepper-number">1</span>
                      </div>
                      <div className="stepper-label">
                        <h3 className="stepper-title georgian">კატეგორია</h3>
                        <div className="stepper-desc georgian">
                          ობიექტის აღწერა
                        </div>
                      </div>
                    </div>
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      <div className="stepper-line w-40px" />
                      <div className="stepper-icon w-40px h-40px">
                        <i className="stepper-check fas fa-check" />
                        <span className="stepper-number">2</span>
                      </div>
                      <div className="stepper-label">
                        <h3 className="stepper-title georgian">მდგომარეობა</h3>
                        <div className="stepper-desc georgian">
                          სამუშაოს განსაზღვრება
                        </div>
                      </div>
                    </div>
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      <div className="stepper-line w-40px" />
                      <div className="stepper-icon w-40px h-40px">
                        <i className="stepper-check fas fa-check" />
                        <span className="stepper-number">3</span>
                      </div>
                      <div className="stepper-label">
                        <h3 className="stepper-title georgian">სამუშაოები</h3>
                        <div className="stepper-desc georgian">
                          შესასრულებელი სამუშაო
                        </div>
                      </div>
                    </div>
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      <div className="stepper-line w-40px" />
                      <div className="stepper-icon w-40px h-40px">
                        <i className="stepper-check fas fa-check" />
                        <span className="stepper-number">4</span>
                      </div>
                      <div className="stepper-label">
                        <h3 className="stepper-title">Billing</h3>
                        <div className="stepper-desc">
                          Provide payment details
                        </div>
                      </div>
                    </div>
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      <div className="stepper-line w-40px" />
                      <div className="stepper-icon w-40px h-40px">
                        <i className="stepper-check fas fa-check" />
                        <span className="stepper-number">5</span>
                      </div>
                      <div className="stepper-label">
                        <h3 className="stepper-title">Completed</h3>
                        <div className="stepper-desc">Review and Submit</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-row-fluid py-lg-5 px-lg-15">
                  <form className="form" noValidate="novalidate" id="">
                    <div className="current" data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="fv-row mb-10">
                          <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                            <span className="required georgian">
                              ქონების ტიპი
                            </span>
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              title="მიუთითეთ სამუშაო ობიექტის ტიპი"
                            />
                          </label>
                          <select
                            className="form-select form-select-solid georgian"
                            aria-label="Select example"
                          >
                            <option value={1}>ბინა</option>
                            <option value={2}>სახლი-აგარაკი</option>
                            <option value={3}>კომერციული ფართი</option>
                            <option value={4}>სასტუმრო</option>
                          </select>
                        </div>
                        <div className="row mb-10">
                          <div className="col-md-12 fv-row">
                            <label className="required fs-6 fw-bold form-label georgian mb-2">
                              მდებარეობა / რაიონი
                            </label>
                            <div className="row fv-row">
                              <div className="col-6">
                                <select
                                  name="locale"
                                  className="form-select form-select-solid georgian"
                                  data-placeholder="მდებარეობა"
                                >
                                  <option value={1}>თბილისი</option>
                                  <option value={2}>რუსთავი</option>
                                  <option value={3}>ქუთაისი</option>
                                  <option value={4}>ბათუმი</option>
                                  <option value={5}>აბასთუმანი</option>
                                  <option value={6}>აბაშა</option>
                                  <option value={7}>ჩხალთა</option>
                                </select>
                              </div>
                              <div className="col-6">
                                <select
                                  name="locale"
                                  className="form-select form-select-solid georgian"
                                  data-placeholder="მდებარეობა"
                                >
                                  <option value={1}>გლდანის რაიონი</option>
                                  <option value={2}>დიდუბის რაიონი</option>
                                  <option value={3}>ვაკის რაიონი</option>
                                  <option value={4}>საურთალოს რაიონი</option>
                                  <option value={5}>მთაწმინდის რაიონი</option>
                                  <option value={6}>ჩუღურეთის რაიონი</option>
                                  <option value={7}>თბილისის შემოგარენი</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-10">
                          <div className="col-md-12 fv-row">
                            <label className="required fs-6 fw-bold form-label georgian mb-2">
                              მისამართი / ტელეფონი
                            </label>
                            <div className="row fv-row">
                              <div className="col-6">
                                <input
                                  type="text"
                                  className="form-control georgian form-control-solid"
                                  placeholder="ზუსტი მისამართი"
                                />
                              </div>
                              <div className="col-6">
                                <input
                                  type="text"
                                  className="form-control georgian form-control-solid"
                                  placeholder="ტელეფონი"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="fv-row">
                          <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                            <span className="required georgian">
                              მდგომარეობა
                            </span>
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              title="მიუთითეთ ობიექტის მდგომარეობა"
                            />
                          </label>
                          <div className="fv-row">
                            <label className="d-flex flex-stack mb-5 cursor-pointer">
                              <span className="d-flex align-items-center me-2">
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-primary">
                                    <span className="svg-icon svg-icon-1 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z"
                                          fill="black"
                                        />
                                        <path
                                          d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </span>
                                <span className="d-flex flex-column">
                                  <span className="fw-bolder georgian fs-6">
                                    ახალი აშენებული
                                  </span>
                                  <span className="fs-7 text-muted">
                                    Creating a clear text structure is just one
                                    SEO
                                  </span>
                                </span>
                              </span>
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="category"
                                  defaultValue={1}
                                />
                              </span>
                            </label>
                            <label className="d-flex flex-stack mb-5 cursor-pointer">
                              <span className="d-flex align-items-center me-2">
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-danger">
                                    <span className="svg-icon svg-icon-1 svg-icon-danger">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                      >
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <rect
                                            x={5}
                                            y={5}
                                            width={5}
                                            height={5}
                                            rx={1}
                                            fill="#000000"
                                          />
                                          <rect
                                            x={14}
                                            y={5}
                                            width={5}
                                            height={5}
                                            rx={1}
                                            fill="#000000"
                                            opacity="0.3"
                                          />
                                          <rect
                                            x={5}
                                            y={14}
                                            width={5}
                                            height={5}
                                            rx={1}
                                            fill="#000000"
                                            opacity="0.3"
                                          />
                                          <rect
                                            x={14}
                                            y={14}
                                            width={5}
                                            height={5}
                                            rx={1}
                                            fill="#000000"
                                            opacity="0.3"
                                          />
                                        </g>
                                      </svg>
                                    </span>
                                  </span>
                                </span>
                                <span className="d-flex flex-column">
                                  <span className="fw-bolder georgian fs-6">
                                    ძველი აშენებული
                                  </span>
                                  <span className="fs-7 text-muted">
                                    Creating a clear text structure is just one
                                    aspect
                                  </span>
                                </span>
                              </span>
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="category"
                                  defaultValue={2}
                                />
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="fv-row">
                          <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                            <span className="required georgian">
                              არსებული მდგომარეობა
                            </span>
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              title="ობიექტის არსებული მდგომარეობა"
                            />
                          </label>
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            <span className="d-flex align-items-center me-2">
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-warning">
                                  <i className="fab fa-html5 text-warning fs-2x" />
                                </span>
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fw-bolder georgian fs-6">
                                  შავი კარკასი
                                </span>
                                <span className="fs-7 georgian text-muted">
                                  სამუშაოები სრულ რემონტამდე.
                                </span>
                              </span>
                            </span>
                            <span className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="radio"
                                defaultChecked="checked"
                                name="framework"
                                defaultValue={1}
                              />
                            </span>
                          </label>
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            <span className="d-flex align-items-center me-2">
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-success">
                                  <i className="fab fa-react text-success fs-2x" />
                                </span>
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fw-bolder georgian fs-6">
                                  თეთრი კარკასი
                                </span>
                                <span className="fs-7 georgian text-muted">
                                  სამუშაოები სრულ რემონტამდე.
                                </span>
                              </span>
                            </span>
                            <span className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="framework"
                                defaultValue={2}
                              />
                            </span>
                          </label>
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            <span className="d-flex align-items-center me-2">
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-danger">
                                  <i className="fab fa-angular text-danger fs-2x" />
                                </span>
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fw-bolder georgian fs-6">
                                  მწვანე კარკასი
                                </span>
                                <span className="fs-7 georgian text-muted">
                                  სამუშაოები სრულ რემონტამდე.
                                </span>
                              </span>
                            </span>
                            <span className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="framework"
                                defaultValue={3}
                              />
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="fv-row mb-10">
                          <label className="required fs-5 georgian fw-bold mb-2">
                            ობიექტის დასახელება
                          </label>
                          <input
                            type="text"
                            className="form-control georgian form-control-lg form-control-solid"
                            name="dbname"
                            placeholder=""
                            defaultValue="ობიექტის დასახელება"
                          />
                        </div>
                        <div className="row mb-10">
                          <div className="col-md-12 fv-row">
                            <label className="required fs-6 fw-bold form-label georgian mb-2">
                              შესასრულებელი სამუშაოები
                            </label>
                            <div className="row fv-row">
                              <div className="col-6">
                                <div className="d-flex flex-column">
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="closeButton"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      დემონტაჟი
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="addBehaviorOnToastClick"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      ტიხრები
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      ჭერი
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      ლესვა
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="debugInfo"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      იატაკის მოხვეწა
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      სანტექნიკა
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="d-flex flex-column">
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      გათბობა, გაგრილება
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      ელექტროობა
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      ფილის დაგება/გაკვრა
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      სამღებრო სამუშაოები
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      იატაკის საფარი
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      კარ-ფანჯარა
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      დალაგება
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="d-flex flex-column mb-7 fv-row">
                          <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                            <span className="required">Name On Card</span>
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              title="Specify a card holder's name"
                            />
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-solid"
                            placeholder=""
                            name="card_name"
                            defaultValue="Max Doe"
                          />
                        </div>
                        <div className="d-flex flex-column mb-7 fv-row">
                          <label className="required fs-6 fw-bold form-label mb-2">
                            Card Number
                          </label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control form-control-solid"
                              placeholder="Enter card number"
                              name="card_number"
                              defaultValue="4111 1111 1111 1111"
                            />
                            <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                              <img
                                src="assets/media/svg/card-logos/visa.svg"
                                alt=""
                                className="h-25px"
                              />
                              <img
                                src="assets/media/svg/card-logos/mastercard.svg"
                                alt=""
                                className="h-25px"
                              />
                              <img
                                src="assets/media/svg/card-logos/american-express.svg"
                                alt=""
                                className="h-25px"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-10">
                          <div className="col-md-8 fv-row">
                            <label className="required fs-6 fw-bold form-label mb-2">
                              Expiration Date
                            </label>
                            <div className="row fv-row">
                              <div className="col-6">
                                <select
                                  name="card_expiry_month"
                                  className="form-select form-select-solid"
                                  data-control="select2"
                                  data-hide-search="true"
                                  data-placeholder="Month"
                                >
                                  <option />
                                  <option value={1}>1</option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                  <option value={5}>5</option>
                                  <option value={6}>6</option>
                                  <option value={7}>7</option>
                                  <option value={8}>8</option>
                                  <option value={9}>9</option>
                                  <option value={10}>10</option>
                                  <option value={11}>11</option>
                                  <option value={12}>12</option>
                                </select>
                              </div>
                              <div className="col-6">
                                <select
                                  name="card_expiry_year"
                                  className="form-select form-select-solid"
                                  data-control="select2"
                                  data-hide-search="true"
                                  data-placeholder="Year"
                                >
                                  <option />
                                  <option value={2021}>2021</option>
                                  <option value={2022}>2022</option>
                                  <option value={2023}>2023</option>
                                  <option value={2024}>2024</option>
                                  <option value={2025}>2025</option>
                                  <option value={2026}>2026</option>
                                  <option value={2027}>2027</option>
                                  <option value={2028}>2028</option>
                                  <option value={2029}>2029</option>
                                  <option value={2030}>2030</option>
                                  <option value={2031}>2031</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 fv-row">
                            <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                              <span className="required">CVV</span>
                              <i
                                className="fas fa-exclamation-circle ms-2 fs-7"
                                data-bs-toggle="tooltip"
                                title="Enter a card CVV code"
                              />
                            </label>
                            <div className="position-relative">
                              <input
                                type="text"
                                className="form-control form-control-solid"
                                minLength={3}
                                maxLength={4}
                                placeholder="CVV"
                                name="card_cvv"
                              />
                              <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                                <span className="svg-icon svg-icon-2hx">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path d="M22 7H2V11H22V7Z" fill="black" />
                                    <path
                                      opacity="0.3"
                                      d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                                      fill="black"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-stack">
                          <div className="me-5">
                            <label className="fs-6 fw-bold form-label">
                              Save Card for further billing?
                            </label>
                            <div className="fs-7 fw-bold text-muted">
                              If you need more info, please check budget
                              planning
                            </div>
                          </div>
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={1}
                              defaultChecked="checked"
                            />
                            <span className="form-check-label fw-bold text-muted">
                              Save Card
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div data-kt-stepper-element="content">
                      <div className="w-100 text-center">
                        <h1 className="fw-bolder text-dark mb-3">Release!</h1>
                        <div className="text-muted fw-bold fs-3">
                          Submit your app to kickstart your project.
                        </div>
                        <div className="text-center px-4 py-15">
                          <img
                            src="assets/media/illustrations/sketchy-1/9.png"
                            alt=""
                            className="w-100 mh-300px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-stack pt-10">
                      <div className="me-2">
                        <button
                          type="button"
                          className="btn georgian btn-lg btn-light-primary me-3"
                          data-kt-stepper-action="previous"
                        >
                          <span className="svg-icon svg-icon-3 me-1">
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
                                y={11}
                                width={13}
                                height={2}
                                rx={1}
                                fill="black"
                              />
                              <path
                                d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-lg btn-primary"
                          data-kt-stepper-action="submit"
                        >
                          <span className="indicator-label georgian">
                            გაგზავნა
                            <span className="svg-icon svg-icon-3 ms-2 me-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.5"
                                  x={18}
                                  y={13}
                                  width={13}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-180 18 13)"
                                  fill="black"
                                />
                                <path
                                  d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </span>
                          <span className="indicator-progress georgian">
                            გთხოვთ დაიცადოთ...
                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-lg georgian btn-primary"
                          data-kt-stepper-action="next"
                        >
                          გაგრძელება
                          <span className="svg-icon svg-icon-3 ms-1 me-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.5"
                                x={18}
                                y={13}
                                width={13}
                                height={2}
                                rx={1}
                                transform="rotate(-180 18 13)"
                                fill="black"
                              />
                              <path
                                d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="kt_modal_upgrade_plan"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content rounded">
            <div className="modal-header justify-content-end border-0 pb-0">
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <span className="svg-icon svg-icon-1">
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
            <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
              <div className="mb-13 text-center">
                <h1 className="mb-3">Upgrade a Plan</h1>
                <div className="text-muted fw-bold fs-5">
                  If you need more info, please check
                  <a href="#" className="link-primary fw-bolder">
                    Pricing Guidelines
                  </a>
                  .
                </div>
              </div>
              <div className="d-flex flex-column">
                <div
                  className="nav-group nav-group-outline mx-auto"
                  data-kt-buttons="true"
                >
                  <a
                    href="#"
                    className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 active"
                    data-kt-plan="month"
                  >
                    Monthly
                  </a>
                  <a
                    href="#"
                    className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3"
                    data-kt-plan="annual"
                  >
                    Annual
                  </a>
                </div>
                <div className="row mt-10">
                  <div className="col-lg-6 mb-10 mb-lg-0">
                    <div className="nav flex-column">
                      <div
                        className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6"
                        data-bs-toggle="tab"
                        data-bs-target="#kt_upgrade_plan_startup"
                      >
                        <div className="d-flex align-items-center me-2">
                          <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="plan"
                              defaultChecked="checked"
                              defaultValue="startup"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                              Startup
                            </h2>
                            <div className="fw-bold opacity-50">
                              Best for startups
                            </div>
                          </div>
                        </div>
                        <div className="ms-5">
                          <span className="mb-2">$</span>
                          <span
                            className="fs-3x fw-bolder"
                            data-kt-plan-price-month={39}
                            data-kt-plan-price-annual={399}
                          >
                            39
                          </span>
                          <span className="fs-7 opacity-50">
                            /<span data-kt-element="period">Mon</span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                        data-bs-toggle="tab"
                        data-bs-target="#kt_upgrade_plan_advanced"
                      >
                        <div className="d-flex align-items-center me-2">
                          <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="plan"
                              defaultValue="advanced"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                              Advanced
                            </h2>
                            <div className="fw-bold opacity-50">
                              Best for 100+ team size
                            </div>
                          </div>
                        </div>
                        <div className="ms-5">
                          <span className="mb-2">$</span>
                          <span
                            className="fs-3x fw-bolder"
                            data-kt-plan-price-month={339}
                            data-kt-plan-price-annual={3399}
                          >
                            339
                          </span>
                          <span className="fs-7 opacity-50">
                            /<span data-kt-element="period">Mon</span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                        data-bs-toggle="tab"
                        data-bs-target="#kt_upgrade_plan_enterprise"
                      >
                        <div className="d-flex align-items-center me-2">
                          <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="plan"
                              defaultValue="enterprise"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                              Enterprise
                              <span className="badge badge-light-success ms-2 fs-7">
                                Most popular
                              </span>
                            </h2>
                            <div className="fw-bold opacity-50">
                              Best value for 1000+ team
                            </div>
                          </div>
                        </div>
                        <div className="ms-5">
                          <span className="mb-2">$</span>
                          <span
                            className="fs-3x fw-bolder"
                            data-kt-plan-price-month={999}
                            data-kt-plan-price-annual={9999}
                          >
                            999
                          </span>
                          <span className="fs-7 opacity-50">
                            /<span data-kt-element="period">Mon</span>
                          </span>
                        </div>
                      </div>
                      <div className="nav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6">
                        <div className="d-flex align-items-center me-2">
                          <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="plan"
                              defaultValue="custom"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                              Custom
                            </h2>
                            <div className="fw-bold opacity-50">
                              Requet a custom license
                            </div>
                          </div>
                        </div>
                        <div className="ms-5">
                          <a href="#" className="btn btn-sm btn-primary">
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tab-content rounded h-100 bg-light p-10">
                      <div
                        className="tab-pane fade show active"
                        id="kt_upgrade_plan_startup"
                      >
                        <div className="pb-5">
                          <h2 className="fw-bolder text-dark">
                            What’s in Startup Plan?
                          </h2>
                          <div className="text-muted fw-bold">
                            Optimal for 10+ team size and new startup
                          </div>
                        </div>
                        <div className="pt-1">
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Up to 10 Active Users
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Up to 30 Project Integrations
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Analytics Module
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-muted flex-grow-1">
                              Finance Module
                            </span>
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <rect
                                  x={7}
                                  y="15.3137"
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-45 7 15.3137)"
                                  fill="black"
                                />
                                <rect
                                  x="8.41422"
                                  y={7}
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(45 8.41422 7)"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-muted flex-grow-1">
                              Accounting Module
                            </span>
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <rect
                                  x={7}
                                  y="15.3137"
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-45 7 15.3137)"
                                  fill="black"
                                />
                                <rect
                                  x="8.41422"
                                  y={7}
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(45 8.41422 7)"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-muted flex-grow-1">
                              Network Platform
                            </span>
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <rect
                                  x={7}
                                  y="15.3137"
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-45 7 15.3137)"
                                  fill="black"
                                />
                                <rect
                                  x="8.41422"
                                  y={7}
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(45 8.41422 7)"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="fw-bold fs-5 text-muted flex-grow-1">
                              Unlimited Cloud Space
                            </span>
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <rect
                                  x={7}
                                  y="15.3137"
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-45 7 15.3137)"
                                  fill="black"
                                />
                                <rect
                                  x="8.41422"
                                  y={7}
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(45 8.41422 7)"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="kt_upgrade_plan_advanced"
                      >
                        <div className="pb-5">
                          <h2 className="fw-bolder text-dark">
                            What’s in Startup Plan?
                          </h2>
                          <div className="text-muted fw-bold">
                            Optimal for 100+ team size and grown company
                          </div>
                        </div>
                        <div className="pt-1">
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Up to 10 Active Users
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Up to 30 Project Integrations
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Analytics Module
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Finance Module
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Accounting Module
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-muted flex-grow-1">
                              Network Platform
                            </span>
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <rect
                                  x={7}
                                  y="15.3137"
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-45 7 15.3137)"
                                  fill="black"
                                />
                                <rect
                                  x="8.41422"
                                  y={7}
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(45 8.41422 7)"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="fw-bold fs-5 text-muted flex-grow-1">
                              Unlimited Cloud Space
                            </span>
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <rect
                                  x={7}
                                  y="15.3137"
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-45 7 15.3137)"
                                  fill="black"
                                />
                                <rect
                                  x="8.41422"
                                  y={7}
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(45 8.41422 7)"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="kt_upgrade_plan_enterprise"
                      >
                        <div className="pb-5">
                          <h2 className="fw-bolder text-dark">
                            What’s in Startup Plan?
                          </h2>
                          <div className="text-muted fw-bold">
                            Optimal for 1000+ team and enterpise
                          </div>
                        </div>
                        <div className="pt-1">
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Up to 10 Active Users
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Up to 30 Project Integrations
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Analytics Module
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Finance Module
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Accounting Module
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Network Platform
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Unlimited Cloud Space
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-center flex-row-fluid pt-12">
                <button
                  type="reset"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
        <span className="svg-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect
              opacity="0.5"
              x={13}
              y={6}
              width={13}
              height={2}
              rx={1}
              transform="rotate(90 13 6)"
              fill="black"
            />
            <path
              d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
              fill="black"
            />
          </svg>
        </span>
      </div> */}
    </>
  );
};

export default Projects;
