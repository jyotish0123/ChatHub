import { Box, Typography, styled } from "@mui/material";
import { style, typography } from "@mui/system";
import { emptyChatImage } from "../../../constants/data";

const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0px;
  text-align: center;
  height: 100%;
`;

const Container = styled(Box)`
  padding: 0px 200px;
`;
const Image = styled("img")({
  width: "400px",
  marginTop: 100,
});

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0px 10px 0px;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
`;
const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="Error image loading"></Image>
        <Title>welcome to chatopia.</Title>
        <SubTitle>
          Now send and recieve messages in both of the text and document form.
        </SubTitle>
        <SubTitle>
          see the users online.
        </SubTitle>
      </Container>
    </Component>
  );
};

export default EmptyChat;
