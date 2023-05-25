const Export = ({ setSelect }) => {
    return(
        <div
        style={{ display: "block", paddingLeft: "0px" }}
        className="modal fade show"
        id="kt_modal_export_users"
        role="dialig"
        tabIndex={-1}
        aria-hidden="true"
        >
        <div className="modal-dialog modal-dialog-centered mw-650px">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="fw-bolder georgian">
                მონაცემების ამოღება
              </h2>
              <div
                className="btn btn-icon btn-sm btn-active-icon-primary"
                data-kt-users-modal-action="close"
                onClick={() => {
                    setSelect(null)
                  }}
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
            <div className="modal-body w-100">
              <form
                id="kt_modal_export_users_form"
                className="form"
                action="#"
              >
                <div className="fv-row mb-10">
                  <label className="required fs-6 fw-bold form-label mb-2 georgian">
                    აირჩიეთ ფორმატი:
                  </label>
                  <select
                    name="format"
                    data-control="select2"
                    data-placeholder="აირჩიეთ ფორმატი"
                    data-hide-search="true"
                    className="form-select form-select-solid georgian"
                  >
                    <option />
                    <option value="excel">Excel</option>
                    <option value="pdf">PDF</option>
                    <option value="cvs">CVS</option>
                    <option value="zip">ZIP</option>
                  </select>
                </div>
                <div className="text-center">
                  <button
                    type="reset"
                    className="btn btn-light me-3 georgian"
                    data-kt-users-modal-action="cancel"
                  >
                    გამორთვა
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-kt-users-modal-action="submit"
                  >
                    <span className="indicator-label georgian">
                      გადმოწერა
                    </span>
                    <span className="indicator-progress georgian">
                      გთხოვთ დაიცადოთ...
                      <span className="spinner-border spinner-border-sm align-middle ms-2" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Export;