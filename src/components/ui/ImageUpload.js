import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import styles from "./ImageUpload.module.css";

const ImageUpload = ({ onImageUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        onImageUpload(file);
      }
    },
    [onImageUpload]
  );

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
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g mask="url(#mask0_547_695)">
              <path
                d="M11.5 19V10.35L9.16923 12.6807L8.46152 11.9615L12 8.42303L15.5385 11.9615L14.8308 12.6807L12.5 10.35V19H11.5ZM5 8.65381V6.26918C5 5.80893 5.15417 5.42464 5.4625 5.11631C5.77083 4.80798 6.15512 4.65381 6.61537 4.65381H17.3846C17.8449 4.65381 18.2292 4.80798 18.5375 5.11631C18.8458 5.42464 19 5.80893 19 6.26918V8.65381H18V6.26918C18 6.11533 17.9359 5.97431 17.8077 5.84611C17.6795 5.71791 17.5385 5.65381 17.3846 5.65381H6.61537C6.46154 5.65381 6.32052 5.71791 6.1923 5.84611C6.0641 5.97431 6 6.11533 6 6.26918V8.65381H5Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
          <span>სურათის ატვირთვა</span>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;