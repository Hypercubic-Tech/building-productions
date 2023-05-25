function Footer() {
  return (
    <div className="landing-dark-separator landing-dark-bg" style={{marginTop: '444px'}}>
      <div className="container">
        <div className="d-flex flex-column flex-md-row flex-stack py-7 py-lg-10">
          <div className="d-flex align-items-center order-2 order-md-1">
            <a href="../../demo11/dist/landing.html">
              <img
                alt="Logo"
                src="assets/media/logos/logo-landing.svg"
                className="h-15px h-md-20px"
              />
            </a>
            <span
              className="mx-5 fs-6 fw-bold text-gray-600 pt-1"
              href="https://keenthemes.com"
            >
              {/* © 2021 Keenthemes Inc. */}
            </span>
          </div>
          <ul className="menu menu-gray-600 menu-hover-primary fw-bold fs-6 fs-md-5 order-1 mb-5 mb-md-0">
            <li className="menu-item">
              {/* <a
                href="https://keenthemes.com"
                target="_blank"
                className="menu-link px-2"
              >
                About
              </a> */}
            </li>
            <li className="menu-item mx-5">
              {/* <a
                href="https://keenthemes.com/support"
                target="_blank"
                className="menu-link px-2"
              >
                Support
              </a> */}
            </li>
            <li className="menu-item">
              {/* <a href="" target="_blank" className="menu-link px-2">
                Purchase
              </a> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
