import React, { useState } from "react";
import {Upload,Modal} from "antd";
import {Plus} from "phosphor-react";

function getBase64(file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
const uploadButton = (
    <div>
      <Plus />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

const UploadImg=()=>{
    const[previewVisible,setpreviewVisible]=useState(false);
    const[previewImage,setpreviewImage]=useState('');
    const[previewTitle,setpreviewTitle]=useState('');
    const[fileList,setfileList]=useState([]);

  const handleCancel=()=>{
      setpreviewVisible(false);
    };

  const handlePreview= async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

      setpreviewImage(file.url || file.preview);
      setpreviewVisible(true);
      setpreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

  const handleChange = (obj:any) =>{
      setfileList(obj.fileList);
      console.log(obj.filelist);
  };
    return (
      <>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >=1  ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="UploadImg" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </>
    );
  }


export default UploadImg;