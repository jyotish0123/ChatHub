import { useContext } from "react";
import { useState } from "react";
import { Box, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider.jsx";
import { style } from "@mui/system";
import { Chat as MessageIcon, Message, MoreVert } from "@mui/icons-material";
import InfoDrawer from "../../drawer/InfoDrawer.jsx";
import HeaderMenu from "./HeaderMenu.jsx";
const Component = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin: 2px;
    padding: 8px;
    color: black;
  }
  &:first-child {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;

const Image = styled("img")({
  height: "40px",
  width: "40px",
  borderRadius: "50%",
});
const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { account } = useContext(AccountContext);
  console.log(account);

  const toggelDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <Component>
        <Image
          src={account.picture}
          alt="Error"
          onClick={() => toggelDrawer()}
        ></Image>
        <Wrapper>
          <MessageIcon></MessageIcon>
          <HeaderMenu setOpenDrawer={setOpenDrawer}></HeaderMenu>
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}></InfoDrawer>
    </>
  );
};

export default Header;
