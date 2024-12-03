import { Box } from "@mui/material";

import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider.jsx";
import { getConversation } from "../../../service/api.js";
// components;
import ChatHeader from "./ChatHeader.jsx";
import Messages from "./Messages.jsx";
export const ChatBox = () => {
  const { person, account } = useContext(AccountContext);

  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        recieverId: person.sub,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub]);
  return (
    <Box style={{ height: "75%" }}>
      <ChatHeader person={person}></ChatHeader>
      <Messages person={person} conversation={conversation}></Messages>
    </Box>
  );
};
