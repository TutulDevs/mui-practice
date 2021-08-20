import {
  Badge,
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
import { HiBell, HiClock } from "react-icons/hi";
import { FaEnvelopeOpen } from "react-icons/fa";

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
    minWidth: 250,
    maxWidth: 400,
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

const BadgeStyle = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.red.main,
    color: theme.palette.common.white,
    top: "-3px",
    fontSize: theme.spacing(1.75),
  },
}));

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
  transition: "background 0.25s ease-in",
  "&:hover": {
    backgroundColor: theme.palette.green.light,
    underline: "none",
  },
}));

const MenuItemUnseenStyle = styled(MenuItem)(({ theme }) => ({
  backgroundColor: theme.palette.gray.lighter,
  padding: "16px 12px 16px 8px",
  display: "flex",
  alignItems: "center",
  whiteSpace: "break-spaces",
  "&:hover": {
    backgroundColor: theme.palette.gray.light,
  },
}));

const MenuItemSeenStyle = styled(MenuItem)(() => ({
  padding: "16px 12px 16px 8px",
  display: "flex",
  alignItems: "center",
  whiteSpace: "break-spaces",
}));

const MenuItemIconButtonStyle = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  backgroundColor: theme.palette.gray.lighter,
  color: `#${Math.random().toString(16).substr(-6)}`,
}));

const MenuItemTimeStampStyle = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: theme.spacing(1.85),
  color: theme.palette.gray.main,
  margin: 0,
  marginTop: theme.spacing(0.5),
  "& span": {
    marginLeft: theme.spacing(1),
  },
}));

// List of notification
const notificationList = [
  {
    id: "n1",
    status: "unseen",
    avatar: <FaEnvelopeOpen fontSize='small' />,
    mainText: "Your order is placed",
    subText: "waiting for shipping",
    time: "about 12 hours",
  },
  {
    id: "n2",
    status: "seen",
    avatar: <FaEnvelopeOpen fontSize='small' />,
    mainText: "You have new message",
    subText: "5 unread messages",
    time: "1 day",
  },
  {
    id: "n3",
    status: "unseen",
    avatar: <FaEnvelopeOpen fontSize='small' />,
    mainText: "Miss Veronica Walter",
    subText: "answered to your comment on the minimal",
    time: "about 4 hours",
  },
  {
    id: "n4",
    status: "seen",
    avatar: <FaEnvelopeOpen fontSize='small' />,
    mainText: "You have new mail",
    subText: "sent from guido padberg",
    time: "2 day",
  },
  {
    id: "n5",
    status: "seen",
    avatar: <FaEnvelopeOpen fontSize='small' />,
    mainText: "Delivery processing",
    subText: "your order is being shipped",
    time: "3 day",
  },
];

const seenNotifications = notificationList.filter((el) => el.status === "seen");
const unSeenNotifications = notificationList.filter(
  (el) => el.status === "unseen"
);
const totalUnseenNotifications = unSeenNotifications.length;

const Notifications = (props) => {
  const classes = useStyles();

  return (
    <>
      <IconButton
        aria-controls='notifications'
        aria-haspopup='true'
        onClick={props.onOpen}>
        <BadgeStyle badgeContent={totalUnseenNotifications}>
          <HiBell fontSize='small' />
        </BadgeStyle>
      </IconButton>

      <StyledMenu
        id='notificationsMenu'
        anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.onClose}>
        {/* Header */}
        <BoxStyle>
          <Typography variant='h6' component='h3'>
            Notifications
          </Typography>
          <Typography
            variant='body2'
            component='p'
            className={classes.grayMain}>
            You have {totalUnseenNotifications} unread messages
          </Typography>
        </BoxStyle>

        <Divider />

        {/* Unseen Notifications */}
        <Typography
          variant='button'
          component='h4'
          className={classes.listHeader}>
          NEW
        </Typography>

        {unSeenNotifications.map((el) => (
          <MenuItemUnseenStyle key={el.id}>
            <MenuItemIconButtonStyle>{el.avatar}</MenuItemIconButtonStyle>

            <Box>
              <Typography variant='body2' component='p'>
                <strong>{el.mainText}</strong>{" "}
                <span className={classes.grayMain}>{el.subText}</span>
              </Typography>

              <MenuItemTimeStampStyle variant='caption' component='p'>
                <HiClock fontSize='small' />
                <span>{el.time}</span>
              </MenuItemTimeStampStyle>
            </Box>
          </MenuItemUnseenStyle>
        ))}

        {/* Seen Notifications */}
        <Typography
          variant='button'
          component='h4'
          className={classes.listHeader}>
          BEFORE THAT
        </Typography>

        {seenNotifications.map((el) => (
          <MenuItemSeenStyle key={el.id}>
            <MenuItemIconButtonStyle>{el.avatar}</MenuItemIconButtonStyle>

            <Box>
              <Typography variant='body2' component='p'>
                <strong>{el.mainText}</strong>{" "}
                <span className={classes.grayMain}>{el.subText}</span>
              </Typography>

              <MenuItemTimeStampStyle variant='caption' component='p'>
                <HiClock fontSize='small' />
                <span>{el.time}</span>
              </MenuItemTimeStampStyle>
            </Box>
          </MenuItemSeenStyle>
        ))}

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
