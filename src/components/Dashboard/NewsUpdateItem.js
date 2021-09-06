import { Link as RouterLink } from "react-router-dom";
import { styled } from "@material-ui/styles";
import { Avatar, Box, Typography, Link } from "@material-ui/core";

const BoxContainerStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  "& .MuiAvatar-root": {
    borderRadius: theme.spacing(1),
  },
  "& h3": {
    fontWeight: 500,
  },
  "& .MuiTypography-caption": {
    color: theme.palette.text.secondary,
    //width 200,
    [theme.breakpoints.up("xs")]: {
      width: 250,
    },
    [theme.breakpoints.up("lg")]: {
      width: 400,
    },
    [theme.breakpoints.up("xl")]: {
      width: 700,
    },
  },
  "& .MuiTypography-body2": {
    flexShrink: 0,
    paddingRight: theme.spacing(2.5),
    color: theme.palette.gray.main,
  },
}));

const NewsUpdateItem = (props) => {
  return (
    <BoxContainerStyle sx={{ my: 1 }}>
      <Avatar src={props.photo} alt={props.title} />

      <Box sx={{ px: 1.5, flex: 1 }}>
        <Link to="/" component={RouterLink} underline="hover" color="inherit">
          <Typography variant="body1" component="h3">
            {props.title}
          </Typography>
        </Link>
        <Typography variant="caption" component="p" noWrap>
          {props.subtitle}
        </Typography>
      </Box>

      <Typography variant="body2">{props.postingTime}</Typography>
    </BoxContainerStyle>
  );
};

export default NewsUpdateItem;
