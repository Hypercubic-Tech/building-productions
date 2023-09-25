import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import UploadSvg from "../svg/UploadSvg";
import PictureUploadSvg from "../svg/PictureUploadSvg";

import styles from "./ImageUpload.module.css";

const ImageUpload = ({ onImageUpload, handleImageRemove, quantity, type }) => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setUploadedImage(file);
        onImageUpload(file);
      }
    },
    [onImageUpload]
  );

  const removeImage = () => {
    setUploadedImage(null);
    handleImageRemove();
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: quantity,
    type: "file",
    multiple: true
  });

  return (
    <>
      {type === "account" ? (
        <div className={styles.ImageUpload}>
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <div className={styles.textAndSvg}>
              <UploadSvg />
              <span>სურათის ატვირთვა</span>
            </div>
          </div>
          {/* {uploadedImage && (
        <div className={styles.removeButton} 
        
        onClick={removeImage}
        >
          წაშლა
        </div>
      )} */}
        </div>
      ) : type === "projects" ? (
        <div className={styles.uploadSvgWrapper} {...getRootProps()}>
          {/* <input {...getInputProps()} /> */}
          <PictureUploadSvg />
          <span>სურათის ატვირთვა</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ImageUpload;