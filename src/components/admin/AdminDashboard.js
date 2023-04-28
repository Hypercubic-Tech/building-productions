import React, { useState, useEffect } from "react";

import useAxiosPrivate from "@/hooks/useAxiosPrivate";

const AdminDashboard = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState(null);
  const [crafts, setCrafts] = useState(null);
  const [craftData, setCraftData] = useState({
    image: null,
    craftName: "",
    category: "",
  });

  const axiosPrivate = useAxiosPrivate();

  const addCategoryHandler = () => {
    axiosPrivate
    .post("/api/admin/content/add_category", {
      category: categoryName,
    })
    .then((res) => {
      console.log(res);
    });
  };

  const addCraftHandler = () => {
    saveImage(craftData.image);
  };

  const saveImage = async file => {
    if (!file?.name) return;

    let blob = file.slice(0, file.size, file.type);
    const ext = file.type.slice(6);

    const newFile = new File([blob], `${craftData.category}.${ext}`, { type: file.type });
    let data = new FormData();
    data.append("image", newFile);
    data.append("category", craftData.category);

    await axiosPrivate.post("api/admin/content/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    const getDataHandler = async () => {
      await axiosPrivate
      .get("/api/admin/content/get_categories", {})
      .then((res) => {
        let data = res.data;
        setCategories(data);
      })
      .catch((e) => {
        console.log(e, "error");
      });
    };
    getDataHandler();
  }, [categories]);

  return (
    <div>
      <div>
        <input
          onChange={(e) => setCategoryName(e.target.value)}
          type="text"
          name="category"
          placeholder="Enter category"
        />
        <div onClick={addCategoryHandler}>Add</div>
      </div>
      <div
        style={{
          padding: "20px",
          marginTop: "100px",
          border: "1px solid black",
        }}
      >
        <form
          style={{
            display: "flex",
            width: "50%",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setCraftData((prevCraftData) => ({
                ...prevCraftData,
                image: e.target.files[0],
              }));
            }}
          />
          <select
            onChange={(event) => {
              setCraftData((prevCraftData) => ({
                ...prevCraftData,
                category: event.target.value,
              }));
            }}
            className={`${"form-select"} ${"form-select-solid"} ${"georgian"}`}
          >
            {categories &&
              categories.map((item, index) => {
                return (
                  <option key={index} value={item.category}>
                    {item.category}
                  </option>
                );
              })}
          </select>
          <div onClick={addCraftHandler}>add craft</div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
