import { useContext } from "react";

import LoginDialog from "./account/LoginDialog";

import { AppBar, Toolbar, styled, Box, Dialog } from "@mui/material";
import { AccountContext } from "../context/AccountProvider";
import ChatDialog from "./chat/ChatDialog";
const Header = styled(AppBar)`
  height: 15vh;
  box-shadow: none;
`;
const LoginHeader = styled(AppBar)`
  height: 32vh;
  box-shadow: none;
`;
const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;
const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog></ChatDialog>
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <LoginDialog></LoginDialog>
        </>
      )}
    </Component>
  );
};

export default Messenger;
