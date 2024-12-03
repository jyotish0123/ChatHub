import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";
import { defaultProfilePicture } from "../../../constants/data";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
const Header = styled(Box)`
  height: 44px;
  background-color: #ededed;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Image = styled("img")({
  height: "40px",
  width: "40px",
  borderRadius: "50%",
  objectFit: "cover",
});
const Name = styled(Typography)`
  margin-left: 12px !important;
`;
const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color:rgba(0,0,0,0.6);
`;

const RightContainer=styled(Box)
`margin-left:auto;
&>svg{
    padding:8px;
    font-size:24px;
    color:#000;
}`
const ChatHeader = ({person}) => {
  const {activeUsers}=useContext(AccountContext);
  return (
    <Header>
      <Image src={person.picture} alt="Error loading image"></Image>
      <Box>
        <Name>{person.name}</Name>
        <Status>{activeUsers?.find(user=>user.sub===person.sub)?"Online":"Offline"}</Status>
      </Box>
      <RightContainer>
        <Search></Search>
        <MoreVert></MoreVert>
      </RightContainer>
    </Header>
  );
};
export default ChatHeader;
