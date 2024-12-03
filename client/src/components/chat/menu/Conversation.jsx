import { Box, Typography, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation, getConversation } from "../../../service/api.js";
import { formatDate } from "../../../utils/common-utils";
const Component = styled(Box)`
  display: flex;
  height: 55px;
  padding: 13px, 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  padding: "0px 14px",
});
const Container = styled(Box)`
  display: flex;
`;
const Timestamp = styled(Typography)`
  font-size: 12px;
  margin-left: auto;
  color: #00000099;
  margin-right: 20px;
`;
const Text = styled(Typography)`
  font-size: 14px;
  color: #00000099;
`;
const Conversation = ({ user }) => {
  const { setPerson, account, newMessageFlag } = useContext(AccountContext);
  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        recieverId: user.sub,
      });
      setMessage({ text: data?.message, timestamp: data?.updatedAt });
    };
    getConversationDetails();
  }, [newMessageFlag]);
  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, recieverId: user.sub });
  };
  return (
    <Component onClick={() => getUser()}>
      <Box>
        <Image src={user.picture} alt="Error image loading"></Image>
      </Box>
      <Box style={{ width: "100%" }}>
        <Container>
          <Typography>{user.name}</Typography>
          {message?.text && (
            <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
          )}
        </Container>

        <Box>
          <Text>
            {message?.text?.includes("localhost") ? "media" : message.text}
          </Text>
        </Box>
      </Box>
    </Component>
  );
};

export default Conversation;
