import { NavLink } from "react-router-dom";
import { styled, ListItem, ListItemIcon, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  activeClass: {
    color: `${theme.palette.green.darker} !important`,
    backgroundColor: theme.palette.green.lighter,
    borderRight: `3px solid ${theme.palette.green.darker}`,
    "& .MuiTypography-subtitle1": {
      fontWeight: 600,
    },
  },
}));

const ListItemStyle = styled(ListItem)(() => ({
  padding: 0,
}));

const CustomLinkStyle = styled(NavLink)(({ theme }) => ({
  width: "100%",
  padding: "8px 8px 8px 32px",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: theme.palette.gray.main,

  "& .MuiListItemIcon-root": {
    minWidth: "auto",
    marginRight: theme.spacing(2),
    color: "inherit",
    fontSize: 18,
  },
  "& h6": {
    fontSize: 15,
    fontWeight: 400,
  },
}));

const CustomListItem = (props) => {
  const classes = useStyles();

  return (
    <ListItemStyle button onClick={props.onClick}>
      <CustomLinkStyle to={props.path} activeClassName={classes.activeClass}>
        <ListItemIcon>{props.icon}</ListItemIcon>

        <Typography variant="subtitle1" component="h6">
          {props.title}
        </Typography>
      </CustomLinkStyle>
    </ListItemStyle>
  );
};

export default CustomListItem;

//<ListItemText primary={props.title} />
