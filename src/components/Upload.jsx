import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import React, { useState } from "react";
import { UploadImg } from "../assets";
import { storage } from "../configure";
import { useDropzone } from "react-dropzone";
import { v4 } from "uuid";
import { useEffect } from "react";

const Upload = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, "images/");
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <div className=" py-[18%] text-center items-center space-x-5 space-y-5">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button
        className="px-2 py-1 bg-blue-700 text-white"
        onClick={uploadImage}
      >
        Upload Image
      </button>
      {imageList.map((url, i) => {
        return <img key={i} src={url} alt="" />;
      })}
    </div>
  );
};

export default Upload;
