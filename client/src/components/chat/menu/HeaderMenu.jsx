import { useState } from "react";
import { Menu, MenuItem, styled } from "@mui/material";
import { MoreVert } from "@mui/icons-material";

const MenuOption = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  color: #4a4a4a;
`;

const HeaderMenu = ({ setOpenDrawer }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MoreVert onClick={handleClick} />

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuOption
          onClick={() => {
            handleClose();
            setOpenDrawer(true);
          }}
        >
          Profile
        </MenuOption>
        <MenuOption onClick={handleClose}>My Account</MenuOption>
        <MenuOption onClick={handleClose}>Logout</MenuOption>
      </Menu>
    </>
  );
};

export default HeaderMenu;
