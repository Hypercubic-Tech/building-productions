import React, { useState } from "react";
import axiosInstance from "@/api/axios";

const AdminDashboard = () => {
  const [categoryName, setCategoryName] = useState("");
  const [craftData, setCraftData] = useState({
    image: null,
    craftName: "",
  });

  console.log;

  const addCategoryHandler = () => {
    axiosInstance
      .post("/api/admin/content/add_category", {
        category: categoryName,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const submitHandler = () => {
    const formData = new FormData();
    formData.append("image", craftData.image);
    formData.append("craftName", craftData.craftName);

    axiosInstance
      .post("/api/admin/content/add_craft", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      <div>
        <form>
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
          <input
            type="text"
            placeholder="add craft"
            onChange={(e) => {
              setCraftData((prevCraftData) => ({
                ...prevCraftData,
                craftName: e.target.value,
              }));
            }}
          />
          <div onClick={submitHandler}>add craft</div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
