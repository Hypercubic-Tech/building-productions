const Filter = ({
  giveProductCategory,
  filterProductCategory,
  projectCategory
}) => {
  return (
    <div className="header-menu-container container-xxl d-flex flex-stack h-lg-75px">
      <div className="header-menu flex-column flex-lg-row">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            height: "100px",
          }}
          className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch flex-grow-1"
        >
          {projectCategory &&
            projectCategory.map((item, index) => {

              return (
                <div
                  onClick={() => {
                    giveProductCategory(), filterProductCategory(item?.id);
                  }}
                  key={index}
                  className="menu-item here show menu-lg-down-accordion me-lg-1"
                >
                  <a className="menu-link active py-3">
                    <span className="menu-title georgian">
                      <i className="bi bi-plug-fill" />{" "}
                      {item?.attributes?.title}
                    </span>
                  </a>
                </div>
              );
            })}
          <div className="menu-item here show menu-lg-down-accordion me-lg-1">
            <a className="menu-link active py-3">
              <span className="menu-title georgian">
                <i className="bi bi-plug-fill" /> ჯამური განფასება
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
