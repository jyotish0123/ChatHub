import { Box, styled } from "@mui/material";
import { useContext, useState,useRef } from "react";
import { useEffect } from "react";
import { AccountContext } from "../../../context/AccountProvider.jsx";
import Footer from "./Footer";
import { Message } from "./Message.jsx";
import { getMessages, newMessage } from "../../../service/api.js";
import { Socket } from "socket.io-client";
const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: cover;
`;

const Component = styled(Box)`
  height: 75vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;
const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const { account,socket,newMessageFlag,setNewMessageFlag } = useContext(AccountContext);
  const [incomingMessage,setIncomingMessage]=useState(null);
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState();
  const [image,setImage]=useState("");
  const scrollRef=useRef();
  useEffect(()=>{
    socket.current.on("getMessage",data=>{
     setIncomingMessage({
      ...data,createdAt:Date.now()
     })
    })
   },[])
  useEffect(()=>{
   incomingMessage&&conversation?.members?.includes(incomingMessage.senderId)&&
   setMessages(prev=>[...prev,incomingMessage]);
  },[incomingMessage,conversation])

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    };
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id, newMessageFlag]);



  const sendText = async (e) => {
    const code = e.KeyCode || e.which;
    if (code === 13) {
      let message={};
      if (!file) {
        message = {
          senderId: account.sub,
          recieverId: person.sub,
          conversationId: conversation._id,
          type: "text",
          text: value,
        };
      } else {
         message = {
          senderId: account.sub,
          recieverId: person.sub,
          conversationId: conversation._id,
          type: "file",
          text: image,
        };
      }
      socket.current.emit("sendMessage",message);
      await newMessage(message);
      setValue("");
      setFile("");
      setImage("");
      setNewMessageFlag((prev) => !prev);
    }
  };
  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => {
            return (
              <Container ref={scrollRef}>
                <Message message={message}></Message>
              </Container>
            );
          })}
      </Component>
      <Footer
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
        setImage={setImage}
      ></Footer>
    </Wrapper>
  );
};
export default Messages;
