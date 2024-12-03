import { Drawer, Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./Profile.jsx";
const Text = styled(Typography)`
  font-size: 16px;
`;
const Header = styled(Box)`
  background: #008069;
  height: 107px;
  color: #fffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
    color: white;
    font-size: 18px;
  }
`;
const Component = styled(Box)`
  background: #ededed;
  height:100vh;
`;
const drawerStyle = {
  left: 20,
  top: 17,
  height: "95%",
  width: "30%",
  boxShadow: "none",
};
const InfoDrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBack onClick={() => setOpen(false)}></ArrowBack>
        <Text>Profile</Text>
      </Header>
      <Component>
        <Profile></Profile>
      </Component>
    </Drawer>
  );
};

export default InfoDrawer;
