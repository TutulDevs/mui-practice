import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Box,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { Menu } from "@material-ui/icons";
import Header from "./headerSample";

export const drawerWidth = 240;

// import Footer from "./Footer";
// import MainHeader from "./MainHeader";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8),
  },
}));

const Layout = (props) => {
  // window width
  const { window } = props;
  const [toggleMenu, setToggleMenu] = useState(false);
  const classes = useStyles();

  // toggle drawer
  const handleToggleDrawer = () => setToggleMenu(!toggleMenu);

  // I don't know the work of container yet
  const container =
    window !== undefined ? () => window().document.body : undefined;

  console.log(window);
  console.log(container);

  return (
    <Box sx={{ display: "flex" }}>
      {/* App Bar */}
      <Header onClick={handleToggleDrawer} />

      {/* Drawer */}

      {/* Content */}
    </Box>
  );
};

export default Layout;
