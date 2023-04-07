import { useState } from "react";

const AddProject = () => {
  const [step, setStep] = useState(1);
  const [backBtn, setBackBtn] = useState(false);
  const [sendData, setSendData] = useState([
    {
      kategoria: {
        qonebisTipi: "",
        qalaqi: "",
        raioni: "",
        misamarti: "",
        telefoni: "",
      },
      mdgomareoba: {
        mdgomareoba: "",
        arsebuliMdgomareoba: "",
      },
      samushaoebi: {
        obieqtisDasaxeleba: "",
        shesasrulebeliSamushaoebi: "",
      },
    },
  ]);

  const defaultData = [
    {
      title: "კატეგორია",
      teaser: "ობიექტის აღწერა",
      num: 1,
      values: {
        type: ["ბინა", "სასტუმრო", "კომერციული ფართი", "სასტუმრო"],
        city: ["თბილისი", "რუსთავი", "ქუთაისი", "ბათუმი"],
        district: [
          "გლდანის რაიონი",
          "მთაწმინდის რაიონი",
          "ვაკე-საბურთალო",
          "ჩუღურეთი",
        ],
        address: "",
        mobileNumber: "",
      },
    },
    {
      title: "მდგომარეობა",
      teaser: "სამუშაოს განსაზღვრება",
      num: 2,
      values: {
        condition: ["ძველი აშენებული", "ახალი აშენებული"],
        currentCondition: ["შავი კარკასი", "თეთრი კარკასი", "მწვანე კარკასი"],
      },
    },
    {
      title: "სამუშაოები",
      teaser: "შესასრულებელი სამუშაო",
      num: 3,
      values: {
        nameOfObj: "",
        worksToDo: [
          "დემონტაჟი",
          "ტიხრები",
          "ჭერი",
          "ლესვა",
          "იატაკის მოხვეწა",
          "სანტექნიკა",
          "გათბობა გაგრილება",
          "ელექტროობა",
          "ფილის დაგება/გაკვრა",
          "იატაკის საფარი",
          "კარ-ფანჯარა",
          "დალაგება",
        ],
      },
    },
    {
      title: "დამატება",
      teaser: "",
      num: 4,
      values: {},
    },
  ];

  const getStatusClass = (index) => {
    console.log(step)
    if (index < step) {
      return "completed";
    } else if (index === step) {
      return "current";
    } else {
      return "pending";
    }
  };

  const stepChangeHandler = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const prevStepHandler = () => {
    if (step > 1) {
      setBackBtn(true);
      setStep(step - 1);
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSendData((prevState) => {
      const newData = [...prevState];
      newData[0].samushaoebi.shesasrulebeliSamushaoebi = checked
        ? [...newData[0].samushaoebi.shesasrulebeliSamushaoebi, value]
        : newData[0].samushaoebi.shesasrulebeliSamushaoebi.filter(
            (val) => val !== value
          );
      return newData;
    });
  };

  return (
    <div className="modal-dialog modal-dialog-centered mw-900px">
      {/*begin::Modal content*/}
      <div className="modal-content">
        {/*begin::Modal header*/}
        <div className="modal-header">
          {/*begin::Modal title*/}
          <h2 className="georgian">ობიექტის დამატება</h2>
          {/*end::Modal title*/}
          {/*begin::Close*/}
          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
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
            {/*end::Svg Icon*/}
          </div>
          {/*end::Close*/}
        </div>
        {/*end::Modal header*/}
        {/*begin::Modal body*/}
        <div className="modal-body py-lg-10 px-lg-10">
          {/*begin::Stepper*/}

          <div
            className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
            id="kt_modal_create_app_stepper"
          >
            {/*begin::Aside*/}
            <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
              {/*begin::Nav*/}
              <div className="stepper-nav ps-lg-10">
                {/*begin::Step 1*/}
                {defaultData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`${"stepper-item"} ${getStatusClass(index)}`}
                      data-kt-stepper-element="nav"
                    >
                      {/*begin::Line*/}
                      <div className="stepper-line w-40px" />
                      {/*end::Line*/}
                      {/*begin::Icon*/}
                      <div className="stepper-icon w-40px h-40px">
                        <i className="stepper-check fas fa-check" />
                        <span className="stepper-number">{item.num}</span>
                      </div>
                      {/*end::Icon*/}
                      {/*begin::Label*/}
                      <div className="stepper-label">
                        <h3 className="stepper-title georgian">{item.title}</h3>
                        <div className="stepper-desc georgian">
                          {item.teaser}
                        </div>
                      </div>
                      {/*end::Label*/}
                    </div>
                  );
                })}

                {/*end::Step 1*/}
                {/*begin::Step 2*/}

                {/*end::Step 2*/}
                {/*begin::Step 3*/}

                {/*end::Step 3*/}
                {/*begin::Step 4*/}

                {/*end::Step 4*/}
                {/*begin::Step 5*/}

                {/*end::Step 5*/}
              </div>
              {/*end::Nav*/}
            </div>
            {/* left panel */}
            {/*begin::Aside*/}
            {/*begin::Content*/}
            <div className="flex-row-fluid py-lg-5 px-lg-15">
              {/*begin::Form*/}
              <form className="form" noValidate="novalidate" id="">
                {/*begin::Step 1*/}
                <div
                  className={getStatusClass(1)}
                  data-kt-stepper-element="content"
                >
                  <div className="w-100">
                    {/*begin::Input group*/}
                    <div className="fv-row mb-10">
                      {/*begin::Label*/}
                      <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                        <span className="required georgian">ქონების ტიპი</span>
                        <i
                          className="fas fa-exclamation-circle ms-2 fs-7"
                          title="მიუთითეთ სამუშაო ობიექტის ტიპი"
                        />
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <select
                        onChange={(event) =>
                          setSendData((prevSendData) => [
                            {
                              ...prevSendData[0],
                              kategoria: {
                                ...prevSendData[0].kategoria,
                                qonebisTipi: event.target.value,
                              },
                              mdgomareoba: {
                                ...prevSendData[0].mdgomareoba,
                              },
                              samushaoebi: {
                                ...prevSendData[0].samushaoebi,
                              },
                            },
                          ])
                        }
                        className="form-select form-select-solid georgian"
                      >
                        <option value={"bina"}>ბინა</option>
                        <option value={"saxli-agaraki"}>სახლი-აგარაკი</option>
                        <option value={"komerciuli-farti"}>
                          კომერციული ფართი
                        </option>
                        <option value={"sastumro"}>სასტუმრო</option>
                      </select>
                      {/*end::Input*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="row mb-10">
                      {/*begin::Col*/}
                      <div className="col-md-12 fv-row">
                        {/*begin::Label*/}
                        <label className="required fs-6 fw-bold form-label georgian mb-2">
                          მდებარეობა / რაიონი
                        </label>
                        {/*end::Label*/}
                        {/*begin::Row*/}
                        <div className="row fv-row">
                          {/*begin::Col*/}
                          <div className="col-6">
                            <select
                              onChange={(event) =>
                                setSendData((prevSendData) => [
                                  {
                                    ...prevSendData[0],
                                    kategoria: {
                                      ...prevSendData[0].kategoria,
                                      qalaqi: event.target.value,
                                    },
                                    mdgomareoba: {
                                      ...prevSendData[0].mdgomareoba,
                                    },
                                    samushaoebi: {
                                      ...prevSendData[0].samushaoebi,
                                    },
                                  },
                                ])
                              }
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
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-6">
                            <select
                              onChange={(event) =>
                                setSendData((prevSendData) => [
                                  {
                                    ...prevSendData[0],
                                    kategoria: {
                                      ...prevSendData[0].kategoria,
                                      raioni: event.target.value,
                                    },
                                    mdgomareoba: {
                                      ...prevSendData[0].mdgomareoba,
                                    },
                                    samushaoebi: {
                                      ...prevSendData[0].samushaoebi,
                                    },
                                  },
                                ])
                              }
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
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="row mb-10">
                      {/*begin::Col*/}
                      <div className="col-md-12 fv-row">
                        {/*begin::Label*/}
                        <label className="required fs-6 fw-bold form-label georgian mb-2">
                          მისამართი / ტელეფონი
                        </label>
                        {/*end::Label*/}
                        {/*begin::Row*/}
                        <div className="row fv-row">
                          {/*begin::Col*/}
                          <div className="col-6">
                            <input
                              onChange={(event) =>
                                setSendData((prevSendData) => [
                                  {
                                    ...prevSendData[0],
                                    kategoria: {
                                      ...prevSendData[0].kategoria,
                                      misamarti: event.target.value,
                                    },
                                    mdgomareoba: {
                                      ...prevSendData[0].mdgomareoba,
                                    },
                                    samushaoebi: {
                                      ...prevSendData[0].samushaoebi,
                                    },
                                  },
                                ])
                              }
                              type="text"
                              className="form-control georgian form-control-solid"
                              placeholder="ზუსტი მისამართი"
                            />
                          </div>
                          <div className="col-6">
                            <input
                              onChange={(event) =>
                                setSendData((prevSendData) => [
                                  {
                                    ...prevSendData[0],
                                    kategoria: {
                                      ...prevSendData[0].kategoria,
                                      telefoni: event.target.value,
                                    },
                                    mdgomareoba: {
                                      ...prevSendData[0].mdgomareoba,
                                    },
                                    samushaoebi: {
                                      ...prevSendData[0].samushaoebi,
                                    },
                                  },
                                ])
                              }
                              type="text"
                              className="form-control georgian form-control-solid"
                              placeholder="ტელეფონი"
                            />
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Input group*/}
                  </div>
                </div>
                {/*end::Step 1*/}
                {/*begin::Step 2*/}
                <div
                  className={getStatusClass(2)}
                  data-kt-stepper-element="content"
                >
                  <div className="w-100">
                    {/*begin::Input group*/}
                    <div className="fv-row">
                      {/*begin::Label*/}
                      <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                        <span className="required georgian">მდგომარეობა</span>
                        <i
                          className="fas fa-exclamation-circle ms-2 fs-7"
                          data-bs-toggle="tooltip"
                          title="მიუთითეთ ობიექტის მდგომარეობა"
                        />
                      </label>
                      {/*end::Label*/}
                      {/*begin:Options*/}
                      <div className="fv-row">
                        {/*begin:Option*/}
                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                          {/*begin:Label*/}
                          <span className="d-flex align-items-center me-2">
                            {/*begin:Icon*/}
                            <span className="symbol symbol-50px me-6">
                              <span className="symbol-label bg-light-primary">
                                {/*begin::Svg Icon | path: icons/duotune/maps/map004.svg*/}
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
                                {/*end::Svg Icon*/}
                              </span>
                            </span>
                            {/*end:Icon*/}
                            {/*begin:Info*/}
                            <span className="d-flex flex-column">
                              <span className="fw-bolder georgian fs-6">
                                ახალი აშენებული
                              </span>
                              <span className="fs-7 text-muted">
                                Creating a clear text
                              </span>
                            </span>
                            {/*end:Info*/}
                          </span>
                          {/*end:Label*/}
                          {/*begin:Input*/}
                          <span className="form-check form-check-custom form-check-solid">
                            <input
                              onChange={(event) =>
                                setSendData((prevSendData) => [
                                  {
                                    ...prevSendData[0],
                                    kategoria: {
                                      ...prevSendData[0].kategoria,
                                    },
                                    mdgomareoba: {
                                      ...prevSendData[0].mdgomareoba,
                                      mdgomareoba: event.target.value,
                                    },
                                    samushaoebi: {
                                      ...prevSendData[0].samushaoebi,
                                    },
                                  },
                                ])
                              }
                              className="form-check-input"
                              type="radio"
                              name="category"
                              defaultValue={"ახალი აშენებული"}
                            />
                          </span>
                          {/*end:Input*/}
                        </label>
                        {/*end::Option*/}
                        {/*begin:Option*/}
                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                          {/*begin:Label*/}
                          <span className="d-flex align-items-center me-2">
                            {/*begin:Icon*/}
                            <span className="symbol symbol-50px me-6">
                              <span className="symbol-label bg-light-danger">
                                {/*begin::Svg Icon | path: icons/duotune/general/gen024.svg*/}
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
                                {/*end::Svg Icon*/}
                              </span>
                            </span>
                            {/*end:Icon*/}
                            {/*begin:Info*/}
                            <span className="d-flex flex-column">
                              <span className="fw-bolder georgian fs-6">
                                ძველი აშენებული
                              </span>
                              <span className="fs-7 text-muted">
                                Creating a clear text structure is just one
                                aspect
                              </span>
                            </span>
                            {/*end:Info*/}
                          </span>
                          {/*end:Label*/}
                          {/*begin:Input*/}
                          <span className="form-check form-check-custom form-check-solid">
                            <input
                              onChange={(event) =>
                                setSendData((prevSendData) => [
                                  {
                                    ...prevSendData[0],
                                    kategoria: {
                                      ...prevSendData[0].kategoria,
                                    },
                                    mdgomareoba: {
                                      ...prevSendData[0].mdgomareoba,
                                      mdgomareoba: event.target.value,
                                    },
                                    samushaoebi: {
                                      ...prevSendData[0].samushaoebi,
                                    },
                                  },
                                ])
                              }
                              className="form-check-input"
                              type="radio"
                              name="category"
                              defaultValue={"ძველი აშენებული"}
                            />
                          </span>
                          {/*end:Input*/}
                        </label>
                        {/*end::Option*/}
                      </div>
                      {/*end:Options*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="fv-row">
                      {/*begin::Label*/}
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
                      {/*end::Label*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        {/*begin:Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin:Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-warning">
                              <i className="fab fa-html5 text-warning fs-2x" />
                            </span>
                          </span>
                          {/*end:Icon*/}
                          {/*begin:Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder georgian fs-6">
                              შავი კარკასი
                            </span>
                            <span className="fs-7 georgian text-muted">
                              სამუშაოები სრულ რემონტამდე.
                            </span>
                          </span>
                          {/*end:Info*/}
                        </span>
                        {/*end:Label*/}
                        {/*begin:Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            onChange={(event) =>
                              setSendData((prevSendData) => [
                                {
                                  ...prevSendData[0],
                                  kategoria: {
                                    ...prevSendData[0].kategoria,
                                  },
                                  mdgomareoba: {
                                    ...prevSendData[0].mdgomareoba,
                                    arsebuliMdgomareoba: event.target.value,
                                  },
                                  samushaoebi: {
                                    ...prevSendData[0].samushaoebi,
                                  },
                                },
                              ])
                            }
                            className="form-check-input"
                            type="radio"
                            defaultChecked="checked"
                            name="framework"
                            defaultValue={"შავი კარკასი"}
                          />
                        </span>
                        {/*end:Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        {/*begin:Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin:Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-success">
                              <i className="fab fa-react text-success fs-2x" />
                            </span>
                          </span>
                          {/*end:Icon*/}
                          {/*begin:Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder georgian fs-6">
                              თეთრი კარკასი
                            </span>
                            <span className="fs-7 georgian text-muted">
                              სამუშაოები სრულ რემონტამდე.
                            </span>
                          </span>
                          {/*end:Info*/}
                        </span>
                        {/*end:Label*/}
                        {/*begin:Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            onChange={(event) =>
                              setSendData((prevSendData) => [
                                {
                                  ...prevSendData[0],
                                  kategoria: {
                                    ...prevSendData[0].kategoria,
                                  },
                                  mdgomareoba: {
                                    ...prevSendData[0].mdgomareoba,
                                    arsebuliMdgomareoba: event.target.value,
                                  },
                                  samushaoebi: {
                                    ...prevSendData[0].samushaoebi,
                                  },
                                },
                              ])
                            }
                            className="form-check-input"
                            type="radio"
                            name="framework"
                            defaultValue={"თეთრი კარკასი"}
                          />
                        </span>
                        {/*end:Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        {/*begin:Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin:Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-danger">
                              <i className="fab fa-angular text-danger fs-2x" />
                            </span>
                          </span>
                          {/*end:Icon*/}
                          {/*begin:Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bolder georgian fs-6">
                              მწვანე კარკასი
                            </span>
                            <span className="fs-7 georgian text-muted">
                              სამუშაოები სრულ რემონტამდე.
                            </span>
                          </span>
                          {/*end:Info*/}
                        </span>
                        {/*end:Label*/}
                        {/*begin:Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            onChange={(event) =>
                              setSendData((prevSendData) => [
                                {
                                  ...prevSendData[0],
                                  kategoria: {
                                    ...prevSendData[0].kategoria,
                                  },
                                  mdgomareoba: {
                                    ...prevSendData[0].mdgomareoba,
                                    arsebuliMdgomareoba: event.target.value,
                                  },
                                  samushaoebi: {
                                    ...prevSendData[0].samushaoebi,
                                  },
                                },
                              ])
                            }
                            className="form-check-input"
                            type="radio"
                            name="framework"
                            defaultValue={"მწვანე კარკასი"}
                          />
                        </span>
                        {/*end:Input*/}
                      </label>
                      {/*end::Option*/}
                    </div>
                    {/*end::Input group*/}
                  </div>
                </div>
                {/*end::Step 2*/}
                {/*begin::Step 3*/}
                <div
                  className={getStatusClass(3)}
                  data-kt-stepper-element="content"
                >
                  <div className="w-100">
                    {/*begin::Input group*/}
                    <div className="fv-row mb-10">
                      {/*begin::Label*/}
                      <label className="required fs-5 georgian fw-bold mb-2">
                        ობიექტის დასახელება
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                        onChange={(e) =>
                          setSendData((prevSendData) => [
                            {
                              ...prevSendData[0],
                              kategoria: {
                                ...prevSendData[0].kategoria,
                              },
                              mdgomareoba: {
                                ...prevSendData[0].mdgomareoba,
                              },
                              samushaoebi: {
                                ...prevSendData[0].samushaoebi,
                                obieqtisDasaxeleba: e.target.value,
                              },
                            },
                          ])
                        }
                        type="text"
                        className="form-control georgian form-control-lg form-control-solid"
                        name="dbname"
                        placeholder="ობიექტის დასახელება"
                        defaultValue=""
                      />
                      {/*end::Input*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="row mb-10">
                      {/*begin::Col*/}
                      <div className="col-md-12 fv-row">
                        {/*begin::Label*/}
                        <label className="required fs-6 fw-bold form-label georgian mb-2">
                          შესასრულებელი სამუშაოები
                        </label>
                        {/*end::Label*/}
                        {/*begin::Row*/}
                        <div className="row fv-row">
                          {/*begin::Col*/}
                          <div className="col-6">
                            <div className="d-flex flex-column">
                              <div className="form-check form-check-custom form-check-solid mb-2">
                                <input
                                  onChange={handleCheckboxChange}
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
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="ტიხრები"
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
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="ჭეერი"
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
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="ლესვა"
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
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="იატაკის მოხვეწა"
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
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="სანტექნიკა"
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
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-6">
                            <div className="d-flex flex-column">
                              <div className="form-check form-check-custom form-check-solid mb-2">
                                <input
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="გათბობა, გაგრილება"
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
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="ელექტროობა"
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
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="ფილის დაგება/გაკვრა"
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
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="სამღებრო სამუშაოები"
                                  id="preventDuplicates"
                                />
                                <label
                                  onChange={handleCheckboxChange}
                                  className="form-check-label georgian"
                                  htmlFor="closeButton"
                                >
                                  სამღებრო სამუშაოები
                                </label>
                              </div>
                              <div className="form-check form-check-custom form-check-solid mb-2">
                                <input
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="იატაკის საფარი"
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
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="კარ-ფანჯარა"
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
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="დალაგება"
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
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Input group*/}
                  </div>
                </div>
                {/*end::Step 3*/}
                {/*begin::Step 4*/}
                <div
                  className={getStatusClass(4)}
                  data-kt-stepper-element="content"
                >
                  <div className="w-100 text-center">
                    {/*begin::Heading*/}
                    <h1 className="fw-bolder text-dark mb-3">Release!</h1>
                    {/*end::Heading*/}
                    {/*begin::Description*/}
                    <div className="text-muted fw-bold fs-3">
                      Submit your app to kickstart your project.
                    </div>
                    {/*end::Description*/}
                    {/*begin::Illustration*/}
                    <div className="text-center px-4 py-15">
                      <img
                        src="assets/media/illustrations/sketchy-1/9.png"
                        alt=""
                        className="w-100 mh-300px"
                      />
                    </div>
                    {/*end::Illustration*/}
                  </div>
                </div>
                {/*end::Step 4*/}
                {/*begin::Actions*/}
                <div className="d-flex flex-stack pt-10">
                  {/*begin::Wrapper*/}
                  <div className="me-2">
                    <button
                      style={{ display: step === 1 ? "none" : "" }}
                      onClick={prevStepHandler}
                      type="button"
                      className="btn georgian btn-lg btn-light-primary me-3"
                    >
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr063.svg*/}
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
                      {/*end::Svg Icon*/}უკან
                    </button>
                  </div>
                  {/* back button */}
                  {/*end::Wrapper*/}
                  {/*begin::Wrapper*/}
                  <div>
                    <button
                      onClick={() => console.log(sendData)}
                      style={{ display: step === 4 ? "" : "none" }}
                      type="button"
                      className="btn btn-lg btn-primary"
                    >
                      <span className="indicator-label georgian">
                        გაგზავნა
                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
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
                        {/*end::Svg Icon*/}
                      </span>
                      <span className="indicator-progress georgian">
                        გთხოვთ დაიცადოთ...
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                    </button>
                    {/* send button */}
                    <button
                      style={{ display: step >= 4 ? "none" : "" }}
                      onClick={stepChangeHandler}
                      type="button"
                      className="btn btn-lg georgian btn-primary"
                    >
                      გაგრძელება
                      {/*begin::Svg Icon | path: icons/duotune/arrows/arr064.svg*/}
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
                      {/*end::Svg Icon*/}
                    </button>
                    {/* next button */}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Actions*/}
              </form>
              {/*end::Form*/}
            </div>
            {/* right panel */}
            {/*end::Content*/}
          </div>
          {/*end::Stepper*/}
        </div>
        {/*end::Modal body*/}
      </div>
      {/*end::Modal content*/}
    </div>
  );
};

export default AddProject;
