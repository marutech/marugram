import React, { useState } from "react";

const UploadStorie = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["video/mp4", "video/quicktime", "video/webm"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    console.log(selected);

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Пожалуйста, выберите видео с форматом mp4, mov или webm");
    }
  };

  return (
    <form>
      <div className="form__upload">
        <label>
          <input type="file" onChange={changeHandler} />
          <span>+</span>
        </label>
        Загрузить видео
      </div>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadStorie;
