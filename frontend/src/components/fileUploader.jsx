import { useState } from "react";
import ConvertButton from "./convertButton";
import {
  UploadFile,
  ConvertVideo,
} from "../../bindings/services/convertservice";
import "./fileUploader.css";

function FileUploader() {
  const [files, setFiles] = useState([""]);

  const handleFileChange = (e) => {
    UploadFile()
      .then((result) => {
        if (result.length > 0) {
          setFiles(result)
        }
      })
      .catch((err) => {
        alert("error: ", err);
      });
  };

  const handleConvert = () => {
    if (files.length === 0) {
      alert("Por favor, selecione um arquivo primeiro.");
      return;
    }

    ConvertVideo()
      .then((result) => {
        alert(result);
      })
      .catch((err) => {
        alert("error: ", err);
      });
  };

  return (
    <div id="fileUploader">
      <div className="input-div">
        <input
          className="input"
          name="file"
          type="button"
          multiple
          onClick={handleFileChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          strokeLinejoin="round"
          strokeLinecap="round"
          viewBox="0 0 24 24"
          strokeWidth="2"
          fill="none"
          stroke="currentColor"
          className="icon"
        >
          <polyline points="16 16 12 12 8 16"></polyline>
          <line y2="21" x2="12" y1="12" x1="12"></line>
          <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
          <polyline points="16 16 12 12 8 16"></polyline>
        </svg>
      </div>

      <ul>
        {files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>

      <ConvertButton handleConvert={handleConvert} />
    </div>
  );
}

export default FileUploader;
