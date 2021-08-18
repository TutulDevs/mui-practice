// icons
import {
  Box,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { makeStyles, styled, withStyles } from "@material-ui/styles";

// icons
import { HiBell } from "react-icons/hi";

// components
import MenuArrow from "../UI/MenuArrow";

// styles
const useStyles = makeStyles((theme) => ({
  grayMain: {
    color: theme.palette.gray.main,
  },
  grayDark: {
    color: theme.palette.gray.dark,
  },
}));

const StyledMenu = withStyles((theme) => ({
  paper: {
    minWidth: 250,
    boxShadow: `0 2px 10px -5px ${theme.palette.green.darker}`,
  },
}))((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const BoxStyle = styled(Box)(({ theme }) => ({
  padding: "10px 16px",
}));

const LinkStyle = styled(Link)(({ theme }) => ({
  display: "block",
  textAlign: "center",
  padding: theme.spacing(1),
  color: theme.palette.green.dark,
  fontSize: theme.spacing(2),
  fontWeight: 500,
  borderRadius: theme.spacing(0.75),
  "&:hover": {
    backgroundColor: theme.palette.green.light,
    underline: "none",
  },
}));

const Notifications = (props) => {
  const classes = useStyles();

  return (
    <>
      <IconButton
        aria-controls='notifications'
        aria-haspopup='true'
        onClick={props.onOpen}>
        <HiBell fontSize='small' />
      </IconButton>

      <StyledMenu
        id='notificationsMenu'
        anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.onClose}>
        <MenuArrow />

        {/* Header */}
        <BoxStyle>
          <Typography variant='h6' component='h3'>
            Notifications
          </Typography>
          <Typography
            variant='body2'
            component='paragraph'
            className={classes.grayMain}>
            You have {0} unread messages
          </Typography>
        </BoxStyle>

        <Divider />

        <MenuItem>List of Data</MenuItem>

        <Divider />

        {/* Footer */}
        <BoxStyle>
          <LinkStyle href='/' underline='none'>
            View All
          </LinkStyle>
        </BoxStyle>
      </StyledMenu>
    </>
  );
};

export default Notifications;
