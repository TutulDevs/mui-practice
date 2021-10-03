import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, styled, Toolbar } from "@material-ui/core";

import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";

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

const DashboardLayout = (props) => {
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
      <MainHeader onClick={handleToggleDrawer} />

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

export default DashboardLayout;

export const drawerWidth = 240;
