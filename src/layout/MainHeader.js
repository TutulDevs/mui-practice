import { useState } from "react";

import { AppBar, Box, IconButton, styled, Toolbar } from "@material-ui/core";

// icons
import { RiMenu3Line } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

// components
import LanguageSelector from "../components/MainHeader/SelectLanguage";

import { drawerWidth } from "./Layout";

const AppBarStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  backgroundColor: "rgba(255, 255, 255, 0.72)",
  color: "#333333",
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
    flexShrink: 0,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  borderBottom: "2px solid red",
  display: "flex",
  justifyContent: "space-between",
  alignContent: "flex-start",
  alignItems: "center",
}));

const ContainerStyle = styled(Box)(({ theme }) => ({
  display: "grid",
  gap: theme.spacing(0.5),
  gridAutoFlow: "column",
}));

const ToggleButtonStyle = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const MainHeader = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  // open and close dropdown menu
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBarStyle position='fixed'>
      <ToolbarStyle>
        {/* Left side's items */}
        <ContainerStyle>
          <ToggleButtonStyle
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={props.onClick}>
            <RiMenu3Line fontSize='small' />
          </ToggleButtonStyle>

          <IconButton aria-label='search'>
            <BiSearch fontSize='small' />
          </IconButton>
        </ContainerStyle>

        {/* Right side's items */}
        <ContainerStyle>
          {/* Language selector */}
          <LanguageSelector
            anchorEl={anchorEl}
            onOpen={handleOpen}
            onClose={handleClose}
          />

          {/* Notification */}

          {/* User Avatar */}
        </ContainerStyle>
      </ToolbarStyle>
    </AppBarStyle>
  );
};

export default MainHeader;
