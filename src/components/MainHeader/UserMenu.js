// icons
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { makeStyles, styled, withStyles } from "@material-ui/styles";

// icons & images
import userAvatar from "../../images/avatar_default.jpg";
import { RiHome4Fill, RiUserFill, RiSettings3Fill } from "react-icons/ri";

// styles
const useStyles = makeStyles((theme) => ({
  grayMain: {
    color: theme.palette.gray.main,
  },
  grayDark: {
    color: theme.palette.gray.dark,
  },
  listHeader: {
    color: theme.palette.gray.main,
    margin: "8px 0",
    paddingLeft: theme.spacing(2),
    letterSpacing: 1,
    fontSize: theme.spacing(2),
    fontWeight: 600,
  },
}));

const StyledMenu = withStyles((theme) => ({
  paper: {
    maxWidth: 225,
    width: "90%",
    boxShadow: `0 2px 10px -5px ${theme.palette.green.darker}`,
  },
}))((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
));

const BoxStyle = styled(Box)(({ theme }) => ({
  padding: "10px 16px",
}));

const AvatarButtonStyle = styled(IconButton)(({ theme }) => ({
  padding: "2px 6px",
  "& .MuiAvatar-root": {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

const LinkStyle = styled(Link)(({ theme }) => ({
  display: "block",
  textAlign: "center",
  padding: theme.spacing(1),
  color: theme.palette.common.black,
  fontSize: theme.spacing(2.25),
  fontWeight: 500,
  border: "1px solid #333",
  borderRadius: theme.spacing(0.75),
  transition: "background 0.25s ease-in",
  "&:hover": {
    backgroundColor: theme.palette.gray.lighter,
    underline: "none",
  },
}));

const MenuItemStyle = styled(MenuItem)(({ theme }) => ({
  padding: 0,
  "& a": {
    width: "100%",
    padding: "8px 20px",
    display: "flex",
    alignItems: "center",
    fontSize: 18,
    color: theme.palette.common.black,
    textDecoration: "none",
    "& svg": {
      marginRight: theme.spacing(1.5),
      fontSize: theme.spacing(2.5),
    },
  },
}));

// List of links
const links = [
  { id: "l1", path: "/home", title: "Home", icon: <RiHome4Fill /> },
  { id: "l2", path: "/profile", title: "Profile", icon: <RiUserFill /> },
  { id: "l3", path: "/settings", title: "Settings", icon: <RiSettings3Fill /> },
];

const UserMenu = (props) => {
  const classes = useStyles();

  return (
    <>
      <AvatarButtonStyle
        aria-controls="notifications"
        aria-haspopup="true"
        onClick={props.onOpen}
      >
        <Avatar src={userAvatar} alt="User Name">
          JD
        </Avatar>
      </AvatarButtonStyle>

      <StyledMenu
        id="notificationsMenu"
        anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.onClose}
      >
        {/* Header */}
        <BoxStyle>
          <Typography variant="h6" component="h3">
            Jaydon Frankie
          </Typography>
          <Typography
            variant="body2"
            component="p"
            className={classes.grayMain}
          >
            demo@minimal.cc
          </Typography>
        </BoxStyle>

        <Divider />

        {/* list of links */}
        {links.map((el) => (
          <MenuItemStyle key={el.id}>
            <a href={el.path}>
              {el.icon}
              <Box component="span">{el.title}</Box>
            </a>
          </MenuItemStyle>
        ))}

        {/* Footer */}
        <BoxStyle>
          <LinkStyle href="/" underline="none">
            Logout
          </LinkStyle>
        </BoxStyle>
      </StyledMenu>
    </>
  );
};

export default UserMenu;
