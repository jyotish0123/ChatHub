// components
import { useState } from "react";
import Header from "./Header";
import { Box, styled } from "@mui/material";

import Search from "./Search.jsx";
import Conversations from "./Conversations.jsx";

const Menu = () => {
  const [text,setText]=useState("");
  return (
    <Box>
      <Header></Header>
      <Search setText={setText} ></Search>
      <Conversations text={text}></Conversations>
    </Box>
  );
};

export default Menu;
