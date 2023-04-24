import React, { useState, useEffect } from "react";
import axiosInstance from "@/api/axios";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

const AdminDashboard = () => {
  const [categoryName, setCategoryName] = useState("");
  const [crafts, setCrafts] = useState(null);
  const [craftData, setCraftData] = useState({
    image: null,
    craftName: "",
  });

  const axiosPrivate = useAxiosPrivate();

  const addCategoryHandler = () => {
    axiosInstance
      .post("/api/admin/content/add_category", {
        category: categoryName,
      })
      .then((res) => {
        console.log(res);
      });
  };

  const addCraftHandler = () => {
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

  useEffect(() => {
    const getDataHandler = async () => {
      await axiosPrivate
        .get("/api/admin/content/get_crafts", {})
        .then((res) => {
          let data = res.data;
          setCrafts(data);
        })
        .catch((e) => {
          console.log(e, "error");
        });
    };
    getDataHandler();
  }, []);

  console.log(crafts);
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
          <div onClick={addCraftHandler}>add craft</div>
        </form>
      </div>
      {crafts?.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.publicUrl} />
            <p>{item.craftName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AdminDashboard;
