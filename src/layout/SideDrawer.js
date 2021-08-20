import { Link } from "react-router-dom";
import {
  Hidden,
  styled,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
} from "@material-ui/core";

// icons & images
import userAvatar from "../images/avatar_default.jpg";
import { Inbox, Mail } from "@material-ui/icons";

import { drawerWidth } from "./Layout";

const NavDrawerStyle = styled("nav")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));

const LogoStyle = styled(Typography)(({ theme }) => ({
  color: theme.palette.green.darker,
  margin: 0,
}));

const UserCardStyle = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "inherit",
  backgroundColor: theme.palette.gray.light,
  margin: "12px",
  padding: "14px 12px",
  borderRadius: theme.spacing(1.5),
  textDecoration: "none",
  "& .MuiTypography-root": {
    marginLeft: theme.spacing(1.5),
  },
}));

const SideDrawer = (props) => {
  const drawerContent = (
    <>
      {/* Logo */}
      <Toolbar>
        <LogoStyle variant='h6' component='h2'>
          MUI Dash
        </LogoStyle>
      </Toolbar>

      {/* User Card */}
      <UserCardStyle to='/' onClick={props.onClose}>
        <Avatar src={userAvatar} alt='User Image' />

        <Typography variant='subtitle1' component='h3'>
          Jaydon Frankie
        </Typography>
      </UserCardStyle>

      {/* List of links */}
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text} onClick={props.onClose}>
            <ListItemIcon>
              {index % 2 === 0 ? <Inbox /> : <Mail />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      {/* get more card */}
    </>
  );

  return (
    <NavDrawerStyle aria-label='Navigation Panel'>
      {/* Hidden 01 for sm size */}
      <Hidden smUp implementation='css'>
        <Drawer
          container={props.container}
          variant='temporary'
          //anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.toggleMenu}
          onClose={props.onClose}
          classes={{ paper: props.drawerPaper }}
          ModalProps={{ keepMounted: true }}>
          {/* Drawer Component */}
          {drawerContent}
        </Drawer>
      </Hidden>

      {/* Hidden 02 for big size*/}
      <Hidden xsDown implementation='css'>
        <Drawer variant='permanent' open classes={{ paper: props.drawerPaper }}>
          {drawerContent}
        </Drawer>
      </Hidden>
    </NavDrawerStyle>
  );
};

export default SideDrawer;
