import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, styled, Toolbar } from "@material-ui/core";

import Header from "./headerSample";
import SideDrawer from "./SideDrawer";
//import Footer from "./Footer";
// import MainHeader from "./MainHeader";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
  },
}));

const MainStyle = styled("main")(({ theme }) => ({
  flexGrow: 1,
  minHeight: "100vh",
  padding: theme.spacing(2.5),
}));

const Layout = (props) => {
  // window width
  const { window } = props;
  const [toggleMenu, setToggleMenu] = useState(false);
  const classes = useStyles();

  // toggle drawer
  const handleToggleDrawer = () => setToggleMenu(!toggleMenu);
  const handleToggleClose = () => setToggleMenu(false);

  // I don't know the work of container yet
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* App Bar */}
      <Header onClick={handleToggleDrawer} />

      {/* Drawer */}
      <SideDrawer
        container={container}
        toggleMenu={toggleMenu}
        onClose={handleToggleClose}
        drawerPaper={classes.drawerPaper}
      />

      {/* Content */}
      <MainStyle>
        <Toolbar />
        {/* Main parts */}
        {props.children}
      </MainStyle>
    </Box>
  );
};

export default Layout;

export const drawerWidth = 240;
