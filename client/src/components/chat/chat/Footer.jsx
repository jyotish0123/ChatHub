import { Box, InputBase, styled } from "@mui/material";
import { useEffect } from "react";
import {
  EmojiEmotionsOutlined,
  AttachFile,
  Mic
} from "@mui/icons-material";
import { useState } from "react";
import { uploadFile } from "../../../service/api.js"; 
const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 18px;
  width: 94%;
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
`;
const ClipIcon = styled(AttachFile)`
  transform: rotate(40deg);
`;
const Footer = ({ sendText, setValue, value, file, setFile,setImage }) => {
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response=await uploadFile(data);

        setImage(response.data);
      }
    };
    getImage();
  }, [file]);
  const onFileChange = (e) => {
    //  console.log(e);
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };
  return (
    <Container>
      <EmojiEmotionsOutlined></EmojiEmotionsOutlined>
      <label htmlFor="fileInput">
        <ClipIcon></ClipIcon>
      </label>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={(e) => onFileChange(e)}
      ></input>
      <Search>
        <InputField
          placeholder="Type a message"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={value}
        ></InputField>
      </Search>
      <Mic></Mic>
    </Container>
  );
};

export default Footer;
