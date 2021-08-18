import { useState } from "react";

import { AppBar, Box, IconButton, styled, Toolbar } from "@material-ui/core";

// icons
import { RiMenu3Line } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

// components
import LanguageSelector from "../components/MainHeader/SelectLanguage";
import Notifications from "../components/MainHeader/Notifications";

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
  const [showLang, setShowLang] = useState(null);
  const [showNotification, setShowNotification] = useState(null);

  // open and close lang menu
  const handleOpenLang = (e) => setShowLang(e.currentTarget);
  const handleCloseLang = () => setShowLang(null);

  // notifications
  const handleOpenNotification = (e) => setShowNotification(e.currentTarget);
  const handleCloseNotification = () => setShowNotification(null);

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
            anchorEl={showLang}
            onOpen={handleOpenLang}
            onClose={handleCloseLang}
          />

          {/* Notification */}
          <Notifications
            anchorEl={showNotification}
            onOpen={handleOpenNotification}
            onClose={handleCloseNotification}
          />

          {/* User Avatar */}
        </ContainerStyle>
      </ToolbarStyle>
    </AppBarStyle>
  );
};

export default MainHeader;
