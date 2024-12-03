import { useContext } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data.js";
import { AccountContext } from "../../context/AccountProvider.jsx";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { addUser } from "../../service/api.js";

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const Component = styled(Box)`
  display: flex;
  flex-direction: row;
`;

const Container = styled(Box)`
  padding: 56px 0px 56px 56px;
`;

const Qrcode = styled("img")({
  height: 240,
  width: 240,
  margin: "50px,0px,0px,50px",
  fontSize: 50,
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300px;
  font-family: inherit;
  margin-bottom: 25px;
`;

const StyledList = styled(List)`&>li{
    padding:0,
    margin-top:15px,
    font-size:
}
`;
const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);
  const onLoginSuccess = async (res) => {
    const decoded = jwt_decode(res.credential);
    console.log(decoded);
    setAccount(decoded);
    await addUser(decoded);
  };

  const onLoginError = (res) => {
    console.log(res);
  };
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>To start chatting.......</Title>
          <StyledList>
            <ListItem>1. Login using the beside given google authentication.</ListItem>
            <ListItem>
              2. Talk to your friends and enjoy!
            </ListItem>
            <ListItem>
              3. Happy chatting!
            </ListItem>
          </StyledList>
        </Container>
        <Box style={{ position: "relative" }}>
          <Qrcode src={qrCodeImage} alt="Error image loading"></Qrcode>
          <Box style={{ position: "absolute", top: "40%", width: "100%" }}>
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={onLoginError}
            ></GoogleLogin>
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
