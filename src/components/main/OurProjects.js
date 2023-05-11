import { useState } from "react";

const OurProjects = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="mb-lg-n15 position-relative z-index-2">
      <div className="container">
        <div
          className="card"
          style={{
            filter: "drop-shadow(0px 0px 40px rgba(68, 81, 96, 0.08))",
          }}
        >
          <div className="card-body p-lg-20">
            <div className="text-center mb-5 mb-lg-10">
              <h3
                className="fs-2hx text-dark mb-5"
                id="portfolio"
                data-kt-scroll-offset="{default: 100, lg: 150}"
              >
                Our Projects
              </h3>
            </div>
            <div className="d-flex flex-center mb-5 mb-lg-15">
              <ul className="nav border-transparent flex-center fs-5 fw-bold">
                <li className="nav-item">
                  <a
                    style={{ cursor: "pointer" }}
                    className={`nav-link text-gray-500 text-active-primary px-3 px-lg-6 ${
                      step === 1 ? "active" : ""
                    } `}
                    onClick={() => setStep(1)}
                    data-bs-toggle="tab"
                    data-bs-target="#kt_landing_projects_latest"
                  >
                    Latest
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ cursor: "pointer" }}
                    className={`nav-link text-gray-500 text-active-primary px-3 px-lg-6 ${
                      step === 2 ? "active" : ""
                    }`}
                    onClick={() => setStep(2)}
                    data-bs-toggle="tab"
                    data-bs-target="#kt_landing_projects_web_design"
                  >
                    Web Design
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ cursor: "pointer" }}
                    className={`nav-link text-gray-500 text-active-primary px-3 px-lg-6 ${
                      step === 3 ? "active" : ""
                    }`}
                    onClick={() => setStep(3)}
                    data-bs-toggle="tab"
                    data-bs-target="#kt_landing_projects_mobile_apps"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    style={{ cursor: "pointer" }}
                    className={`nav-link text-gray-500 text-active-primary px-3 px-lg-6 ${
                      step === 4 ? "active" : ""
                    }`}
                    onClick={() => setStep(4)}
                    data-bs-toggle="tab"
                    data-bs-target="#kt_landing_projects_development"
                  >
                    Development
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div
                className={`tab-pane fade ${step === 1 ? "active show" : ""}`}
                id="kt_landing_projects_latest"
              >
                {/* imgs */}
                <div className="row g-10">
                  <div className="col-lg-6">
                    <a
                      className="d-block card-rounded overlay h-lg-100"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x600/img-23.jpg"
                    >
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-23.jpg")',
                        }}
                      />
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <div className="row g-10 mb-10">
                      <div className="col-lg-6">
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-22.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-22.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-6">
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-21.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-21.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <a
                      className="d-block card-rounded overlay"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x400/img-20.jpg"
                    >
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-20.jpg")',
                        }}
                      />
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade ${step === 2 ? "active show" : ""}`}
                id="kt_landing_projects_web_design"
              >
                <div className="row g-10">
                  <div className="col-lg-6">
                    <a
                      className="d-block card-rounded overlay h-lg-100"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x600/img-11.jpg"
                    >
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-11.jpg")',
                        }}
                      />
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <div className="row g-10 mb-10">
                      <div className="col-lg-6">
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-12.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-12.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-6">
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-21.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-21.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <a
                      className="d-block card-rounded overlay"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x400/img-20.jpg"
                    >
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-20.jpg")',
                        }}
                      />
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade ${step === 3 ? "active show" : ""}`}
                id="kt_landing_projects_mobile_apps"
              >
                <div className="row g-10">
                  <div className="col-lg-6">
                    <div className="row g-10 mb-10">
                      <div className="col-lg-6">
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-16.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-16.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-6">
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-12.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-12.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <a
                      className="d-block card-rounded overlay"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x400/img-15.jpg"
                    >
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-15.jpg")',
                        }}
                      />
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <a
                      className="d-block card-rounded overlay h-lg-100"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x600/img-23.jpg"
                    >
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-23.jpg")',
                        }}
                      />
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className={`tab-pane fade ${step === 4 ? "active show" : ""}`}
                id="kt_landing_projects_development"
              >
                <div className="row g-10">
                  <div className="col-lg-6">
                    <a
                      className="d-block card-rounded overlay h-lg-100"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x600/img-15.jpg"
                    >
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-15.jpg")',
                        }}
                      />
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <div className="row g-10 mb-10">
                      <div className="col-lg-6">
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-22.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-22.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-6">
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-21.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-21.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                    </div>
                    <a
                      className="d-block card-rounded overlay"
                      data-fslightbox="lightbox-projects"
                      href="assets/media/stock/600x400/img-14.jpg"
                    >
                      <div
                        className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                        style={{
                          backgroundImage:
                            'url("assets/media/stock/600x600/img-14.jpg")',
                        }}
                      />
                      <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                        <i className="bi bi-eye-fill fs-3x text-white" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
