import { Button, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";
import { AiOutlinePlus } from "react-icons/ai";

// style
const BoxStyle = styled(Box)(({ theme }) => ({
  // root
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  // h3
  "& .MuiTypography-h3": {
    fontSize: 30,
    fontWeight: 500,
  },

  // button style
  "& .MuiButton-contained": {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    fontWeight: 600,
    textTransform: "capitalize",
    padding: `${theme.spacing(0.75)}px ${theme.spacing(2)}px`,
    boxShadow: `rgb(0 171 85 / 24%) 0px 8px 16px 0px`,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
      boxShadow: "none",
    },
  },

  // text after the + icon
  "& .text": {
    marginLeft: theme.spacing(0.5),
  },
}));

const BlogHeader = () => {
  return (
    <BoxStyle>
      <Typography variant="h3">Blog</Typography>

      <Button variant="contained" disableElevation href="#">
        <AiOutlinePlus fontSize="large" />{" "}
        <span className="text">New Post</span>
      </Button>
    </BoxStyle>
  );
};

export default BlogHeader;
