import { useState } from "react";

import AddProject from "./AddProject";

const HeaderPopup = () => {
  const [close, setClose] = useState(false);
  const [addProject, setAddProject] = useState(false);

  const addProjectHandler = () => {
    setAddProject(true);
    setClose(true);
  };
  const data = [
    {
      id: 0,
      title: "texttext",
      description: "some text here some text here",
      img: "/assets/media/products/default.png",
    },
    {
      id: 1,
      title: "text111text",
      description: "some text here som11e text here",
      img: "/assets/media/products/default.png",
    },
    {
      id: 2,
      title: "text222text",
      description: "some text here som222e text here",
      img: "/assets/media/products/default.png",
    },
    {
      id: 3,
      title: "text222text",
      description: "some text here som222e text here",
      img: "/assets/media/products/default.png",
    },
    {
      id: 4,
      title: "text222text",
      description: "some text here som222e text here",
      img: "/assets/media/products/default.png",
    },
  ];

  //   className="modal"
  //         style={{ display: "block", opacity: close ? "0" : "1" }}
  //         tabIndex={-1}
  //         role="dialog"
  return (
    <>
    <div
      style={{ display: "block", opacity: close ? "0" : "1" }}
      className="modal-xxl"
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal title</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <div className="row">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card col-2 d-flex "
                  style={{ width: "20rem", overflow: "hidden" }}
                >
                  <div className="col-11">
                    <img src={item.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <div className="btn-group row">
                        <div href="#" className="btn btn-primary">
                          რედაქტირება
                        </div>
                        <div href="#" className="btn btn-danger">
                          წაშლა
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="modal-footer row">
          <button onClick={addProjectHandler} type="button" className="btn btn-primary">
            დაამატე ობიექტი
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 3a.5.5 0 0 1 .5.5v3.5h3a.5.5 0 0 1 0 1h-3v3.5a.5.5 0 0 1-1 0V8h-3a.5.5 0 0 1 0-1h3V3.5A.5.5 0 0 1 8 3z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    {addProject && (
        <AddProject />
    )}
    </>

  );
};

export default HeaderPopup;
