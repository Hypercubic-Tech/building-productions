import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import styles from "./ImageUpload.module.css";
import UploadSvg from "../svg/UploadSvg";

const ImageUpload = ({ onImageUpload, handleImageRemove }) => {
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
    maxFiles: 1,
  });

  return (
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
  );
};

export default ImageUpload;
