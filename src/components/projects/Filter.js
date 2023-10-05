import { useDispatch, useSelector } from "react-redux";

import { setCategory } from "../../store/slices/categorySlice";
import CheckedSvg from "../svg/CheckedSvg";

import styles from "./Filter.module.css";

const Filter = ({
  filterProductCategory,
  projectCategory,
  totalSumOnClick,
}) => {
  const dispatch = useDispatch();

  const activeCategoryId = useSelector((state) => state?.cats?.category);

  console.log(activeCategoryId);

  return (
    <div className="container">
      <div className={styles.filterContainer}>
        {projectCategory &&
          projectCategory.map((item, index) => {
            return (
              <div
                onClick={() => {
                  filterProductCategory(item?.id);
                }}
                key={index}
                className={styles.filterBtn}
              >
                <a
                  className={`${styles.filterBtnIn} georgian ${
                    activeCategoryId === item?.id
                      ? styles.filterBtnInActive
                      : ""
                  }`}
                >
                  <span
                    className={`menu-title georgian ${styles.item} fw-boldest`}
                  >
                    <div className={styles.iconParent}>
                      <img
                        className={styles.icon}
                        src={`${process.env.NEXT_PUBLIC_BUILDING_URL}${item?.attributes?.icon?.data?.attributes?.url}`}
                      />
                    </div>
                    {item?.attributes?.title}
                  </span>
                </a>
              </div>
            );
          })}
        <div
          className={styles.filterBtn}
          onClick={() => {
            totalSumOnClick();
            dispatch(setCategory(null));
          }}
        >
          <a
            className={`${
              styles.filterBtnIn
            } ${"menu-link"} ${"active"} ${"py-3"} ${
              activeCategoryId === null ? styles.filterBtnInActive : ""
            }`}
          >
            <span className={`menu-title georgian ${styles.item} fw-boldest`}>
              <div className={styles.iconParent}>
                <CheckedSvg className={styles.icon} />
              </div>
              ჯამური განფასება
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Filter;
