import { useState, useEffect } from "react";
import axiosInstance from "@/api/axios";
import styles from "./Modal.module.css";
import Link from "next/link";

import AddProject from "./AddProject";
import EditProject from "./EditProject";

const HeaderPopup = () => {
  const [close, setClose] = useState(false);
  const [addProject, setAddProject] = useState(false);
  const [editProject, setEditProject] = useState(false);
  const [projectsData, setProjectsData] = useState(false);
  const [editProjectData, setEditProjectData] = useState(null);

  useEffect(() => {
    const getDataHandler = async () => {
      const userId = localStorage.getItem('userId');

      await axiosInstance
        .post("/api/admin/projects/get_users_projects", { userId })
        .then((res) => {
          let data = res.data;
          setProjectsData(data.projects);
        })
        .catch((e) => {
          console.log(e, "error");
        });
    };
    getDataHandler();
  }, []);

  const addProjectHandler = () => {
    setAddProject(true);
    setClose(true);
  };

  const dismissHandler = () => {
    setAddProject(false);
    setClose(false);
  };

  const deleteHandler = async (item) => {
    await axiosInstance
      .post("/api/admin/projects/delete_project", {
        item: item._id,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editHandler = async (item) => {
    if(!editProject) {
      setEditProject(true);
    } else {
      setEditProject(false)
    }
    setEditProjectData(item);
    setClose(true)
  };

  return (
    <>
      <div
        style={{ display: close ? "none" : "", overflow: "auto" }}
        className={`modal-xxl ${styles.modal}`}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setClose(true)}
            />
          </div>
          <div className="modal-body">
            <div className="row">
              {projectsData &&
                projectsData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="card col-2 d-flex "
                      style={{ width: "20rem", overflow: "hidden" }}
                    >
                      <div className="col-11">
                        <div className="card-body">
                          <Link href={`/projects/${item._id}`} className="card-title">{item.objectName}</Link>
                          <p className="card-text">{item.propertyType}</p>
                          <div className="btn-group row">
                            <div
                              onClick={() => editHandler(item)}
                              className="btn btn-primary"
                            >
                              რედაქტირება
                            </div>
                            <div
                              onClick={() => deleteHandler(item)}
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
      {editProject && <EditProject data={editProjectData} dismiss={dismissHandler} />}
    </>
  );
};

export default HeaderPopup;
