import React from "react";
import UploadForm from "./UploadForm";
import UploadStorie from "./UploadStorie";

const UploadBtns = () => {
  return (
    <div className="form__wrapper">
      <div className="form__container">
        <UploadStorie />
        <UploadForm />
      </div>
    </div>
  );
};

export default UploadBtns;
