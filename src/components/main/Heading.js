const Heading = () => {
  return (
    <div className="d-flex flex-column flex-center w-100 min-h-350px min-h-lg-500px px-9">
      <div className="text-center mb-5 mb-lg-10 py-10 py-lg-20">
        <h1 className="text-white lh-base fw-bolder fs-2x fs-lg-3x mb-15 georgian">
          გამოთვალე მარტივად
          <br />
          <span
            style={{
              background: "linear-gradient(to right, #12CE5D 0%, #FFD80C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span id="kt_landing_hero_text">სარემონტო ხარჯთაღრიცხვა!</span>
          </span>
        </h1>
        <a
          href="/projects"
          className="btn btn-primary georgian"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_create_app"
          id="kt_toolbar_primary_button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-calculator-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5zm0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1z" />
          </svg>
          <b>გამოთვალე!</b>
        </a>
      </div>
      <div className="d-flex flex-center flex-wrap position-relative px-5">
        <div
          className="d-flex flex-center m-3 m-md-6"
          data-bs-toggle="tooltip"
          title="Fujifilm"
        >
          <img
            src="assets/media/svg/brand-logos/fujifilm.svg"
            className="mh-30px mh-lg-40px"
            alt=""
          />
        </div>
        <div
          className="d-flex flex-center m-3 m-md-6"
          data-bs-toggle="tooltip"
          title="Vodafone"
        >
          <img
            src="assets/media/svg/brand-logos/vodafone.svg"
            className="mh-30px mh-lg-40px"
            alt=""
          />
        </div>
        <div
          className="d-flex flex-center m-3 m-md-6"
          data-bs-toggle="tooltip"
          title="KPMG International"
        >
          <img
            src="assets/media/svg/brand-logos/kpmg.svg"
            className="mh-30px mh-lg-40px"
            alt=""
          />
        </div>
        <div
          className="d-flex flex-center m-3 m-md-6"
          data-bs-toggle="tooltip"
          title="Nasa"
        >
          <img
            src="assets/media/svg/brand-logos/nasa.svg"
            className="mh-30px mh-lg-40px"
            alt=""
          />
        </div>
        <div
          className="d-flex flex-center m-3 m-md-6"
          data-bs-toggle="tooltip"
          title="Aspnetzero"
        >
          <img
            src="assets/media/svg/brand-logos/aspnetzero.svg"
            className="mh-30px mh-lg-40px"
            alt=""
          />
        </div>
        <div
          className="d-flex flex-center m-3 m-md-6"
          data-bs-toggle="tooltip"
          title="AON - Empower Results"
        >
          <img
            src="assets/media/svg/brand-logos/aon.svg"
            className="mh-30px mh-lg-40px"
            alt=""
          />
        </div>
        <div
          className="d-flex flex-center m-3 m-md-6"
          data-bs-toggle="tooltip"
          title="Hewlett-Packard"
        >
          <img
            src="assets/media/svg/brand-logos/hp-3.svg"
            className="mh-30px mh-lg-40px"
            alt=""
          />
        </div>
        <div
          className="d-flex flex-center m-3 m-md-6"
          data-bs-toggle="tooltip"
          title="Truman"
        >
          <img
            src="assets/media/svg/brand-logos/truman.svg"
            className="mh-30px mh-lg-40px"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
