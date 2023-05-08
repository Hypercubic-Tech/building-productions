import { useState, useEffect } from "react";
import axiosInstance from "@/api/axios";
import axiosPrivate from "@/api/axiosPrivate";
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
  const [testData, setTestData] = useState(null);

  // useEffect(() => {
  //   const getDataHandler = async () => {
  //     const userId = localStorage.getItem("userId");

  //     await axiosInstance
  //       .post("/api/admin/projects/get_users_projects", { userId })
  //       .then((res) => {
  //         let data = res.data;
  //         setProjectsData(data.projects);
  //         console.log(data, "data")
  //       })
  //       .catch((e) => {
  //         console.log(e, "error");
  //       });
  //   };
  //   getDataHandler();
  // }, []);

  
  useEffect(() => {
    const getDataHandler = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/projects", {
          method: "GET",
          headers: {
            "Authorization": "Bearer 24c1088f9413f6a7cece60b30e81888c264553e9acb33c385f59443fe022fa27071df28eb721ea9abdf62cd42ec95dfdbc026ff582539cf3914c9ef3a8013211841e9469edb744c0df03e18ad7603a5b53b737a91efbfc8f5f527d963ecca1ab37a0b7c6e7c537abb8511f0d012076340d89ee0bcbee7f6ca595c3416f8fa1fb",
            "Content-type": "application/json",
            "Accept": "application/json",
          },
        });
        const data = await res.json();
        setProjectsData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataHandler();
  }, []);
  
  console.log(projectsData)

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
    if (!editProject) {
      setEditProject(true);
    } else {
      setEditProject(false);
    }
    setEditProjectData(item);
    setClose(true);
  };

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
                projectsData?.data.map((item, index) => {
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
                            href={`/projects/${item.attributes._id}`}
                            className="card-title"
                          >
                            {item.attributes.title}
                          </Link>
                          {/* <p className="card-text">{item.propertyType}</p> */}
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
      {editProject && (
        <EditProject data={editProjectData} dismiss={dismissHandler} />
      )}
    </>
  );
};

export default HeaderPopup;
