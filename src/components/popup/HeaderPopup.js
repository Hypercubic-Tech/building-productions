import { useState, useEffect } from "react";
import axiosPrivate from "@/api/axiosPrivate";
import styles from "./Modal.module.css";
import Link from "next/link";

import AddProject from "./AddProject";
import EditProject from "./EditProject";
import axios from "axios";

const HeaderPopup = () => {
  const [close, setClose] = useState(false);
  const [addProject, setAddProject] = useState(false);
  const [editProject, setEditProject] = useState(false);
  const [projectsData, setProjectsData] = useState(false);
  const [editProjectData, setEditProjectData] = useState(null);

  const addProjectHandler = () => {
    setAddProject(true);
    setClose(true);
  };

  const dismissHandler = () => {
    setAddProject(false);
    setClose(false);
  };

  useEffect(() => {
    const getProjectsHandler = async () => {
      try {
        await axios.get("http://localhost:1337/api/projects")
          .then((res) => {
            const data = res.data;
            setProjectsData(data.data);
          })
      } catch (error) {
        console.log(error);
      } 
    };
    getProjectsHandler();
  }, []);

  return (
    <>
      <div
        style={{
          display: close ? "none" : "",
          overflow: "auto",
          position: "absolute",
          zIndex: "20",
        }}
        className={`modal-xxl ${styles.modal}`}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">ობიექტების ჩამონათვალი</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setClose(true)}
            />
          </div>
          <div className="modal-body">
            <div className="row">
              {projectsData &&
                projectsData?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="card col-2 d-flex "
                      style={{ width: "20rem", overflow: "hidden" }}
                    >
                      <div className="col-11">
                        <div className="card-body">
                          <Link
                            onClick={() => setClose(true)}
                            href={`/projects/${item.id}`}
                            className="card-title"
                          >
                            {item.attributes.title}
                          </Link>
                          <p className="card-text">{item.attributes.address}</p>
                          <div className={`${styles.gap20} row `}>
                            <div
                              // onClick={() => editHandler(item)}
                              className="btn btn-primary"
                            >
                              რედაქტირება
                            </div>
                            <div
                              // onClick={() => deleteHandler(item)}
                              className="btn btn-danger"
                            >
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
            <button
              onClick={addProjectHandler}
              type="button"
              className="btn btn-primary"
            >
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
      {addProject && <AddProject dismiss={dismissHandler} />}
      {editProject && (
        <EditProject data={editProjectData} dismiss={dismissHandler} />
      )}
    </>
  );
};

export default HeaderPopup;
