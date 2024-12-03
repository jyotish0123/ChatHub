import { Box, styled } from "@mui/system";
import { Search as SearchIcon } from "@mui/icons-material";
import { InputBase } from "@mui/material";
const Component = styled(Box)`
  background: #fff;
  height: 45px;
  border-bottom: 2px solid #f2f2f2;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  background-color: #ededed;
  position: relative;
  margin: 0px 13px;
  border-radius: 10px;
  width: 100%;
`;
const Icon = styled(Box)`
  position: absolute;
  color: #919191;
  height: 100%;
  padding: 6px 8px;
`;
const InputField = styled(InputBase)`
  width: 100%;
  padding: 16px;
  height: 15px;
  padding-left: 65px;
  font-size: 14px;
`;
const Search = ({ setText }) => {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon fontSize="small"></SearchIcon>
        </Icon>
        <InputField
          placeholder="Search or Start a new chat"
          onChange={(e) => setText(e.target.value)}
        ></InputField>
      </Wrapper>
    </Component>
  );
};

export default Search;
