import { useEffect, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';

import { setCategory } from "../../store/slices/categorySlice";

import styles from "./Filter.module.css";

const Filter = ({
  filterProductCategory,
  projectCategory,
  totalSumOnClick
}) => {
  const dispatch = useDispatch();

  const activeCategoryId = useSelector(state => state.cats.category);

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
                    filterProductCategory(item?.id);
                  }}
                  key={index}
                  className={`menu-item here show menu-lg-down-accordion me-lg-1`}
                >
                  <a className={`menu-link active py-3 colored-element ${activeCategoryId === item?.id ? 'bg-primary' : ""}`}>
                    <span className={`menu-title georgian ${styles.item}`}>
                      <img className={styles.icon} src={`${process.env.NEXT_PUBLIC_BUILDING_URL}${item.attributes.icon.data.attributes.url}`} />
                      {/* <i className="bi bi-plug-fill" />{" "} */}
                      {item?.attributes?.title}
                    </span>
                  </a>
                </div>
              );
            })}
          <div
            className="menu-item here show menu-lg-down-accordion me-lg-1"
            onClick={() => {
              totalSumOnClick();
              dispatch(setCategory(null));
            }}
          >
            <a className={`${"menu-link"} ${"active"} ${"py-3"} ${activeCategoryId === null ? 'bg-primary' : ""}`}>
              <span className={`menu-title georgian ${styles.item}`}>
                {/* <i className="bi bi-plug-fill" />  */}
                <svg className={styles.icon} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0">
                  </g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                  </g>
                  <g id="SVGRepo_iconCarrier">
                    <g fill="#000000">
                      <path d="M1.5 8a6.5 6.5 0 016.744-6.496.75.75 0 10.055-1.499 8 8 0 107.036 11.193.75.75 0 00-1.375-.6 6.722 6.722 0 01-.22.453A6.5 6.5 0 011.5 8zM11.74.926a.75.75 0 10-.703 1.326c.144.076.284.157.421.243a.75.75 0 00.8-1.27 7.995 7.995 0 00-.519-.299zM14.774 3.743a.75.75 0 00-1.27.799c.087.137.168.277.244.42a.75.75 0 001.326-.701 8.04 8.04 0 00-.3-.518zM15.995 7.7a.75.75 0 00-1.5.056 6.583 6.583 0 01.002.45.75.75 0 101.5.047 8.158 8.158 0 00-.002-.552z"></path> <path d="M11.78 5.22a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06l1.47 1.47 3.97-3.97a.75.75 0 011.06 0z">
                      </path>
                    </g>
                  </g>
                </svg>
                ჯამური განფასება
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
