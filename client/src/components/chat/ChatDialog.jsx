import { useContext } from "react";

import { Dialog, Box, styled } from "@mui/material";
import Menu from "../chat/menu/Menu.jsx";
import EmptyChat from "../chat/chat/EmptyChat.jsx";
import { AccountContext } from "../../context/AccountProvider.jsx";
import { ChatBox } from "./chat/ChatBox.jsx";
const dialogStyle = {
  height: "95%",
  width: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  backgroundColor: "none",
  margin: "20px",
  borderRadius: "0px",
};

const Component = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const LeftComponent = styled(Box)`
  min-width: 20%;
  width: 350px;
`;

const RightComponent = styled(Box)`
  min-width: 30%;
  width: 100%;
  height: 100vh;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;
const ChatDialog = () => {
  const { person } = useContext(AccountContext);
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <Component>
        <LeftComponent>
          <Menu></Menu>
        </LeftComponent>
        <RightComponent>
          {Object.keys(person).length ? (
            <ChatBox></ChatBox>
          ) : (
            <EmptyChat></EmptyChat>
          )}
        </RightComponent>
      </Component>
    </Dialog>
  );
};

export default ChatDialog;
