import { Grid, Typography, Link } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";
import AuthButtonGroup from "../components/AuthPages/ButtonGroup";
import FormLogin from "../components/AuthPages/FormLogin";
import LeftPanel from "../components/AuthPages/LeftPanel";
import SectionDivider from "../components/AuthPages/SectionDivider";

// img
import LoginPhoto from "../images/auth/login.png";

// styles
const ContainerGridStyle = styled(Grid)(({ theme }) => ({
  //border: "1px solid salmon",
  minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight * 2}px)`,
}));

const RightPanelStyle = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: `${theme.spacing(1)}px ${theme.spacing(3)}px`,

  "& .account_switch": {
    textAlign: "right",
    "& .MuiLink-underlineNone	": {
      color: theme.palette.green.darker,
      fontWeight: 500,
    },

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  "& .form_Container": {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    "& .MuiTypography-h4": {
      fontSize: 25,
      fontWeight: 500,
    },
    "& .MuiTypography-paragraph": {
      margin: "8px 0 20px 0",
    },
  },
}));

const Login = () => {
  return (
    <ContainerGridStyle container>
      <LeftPanel
        gridSize={5}
        title="Hi, Welcome Back"
        img={LoginPhoto}
        imgAlt="Login Image"
      />

      <RightPanelStyle item xs={12} md={7}>
        <Typography paragraph className="account_switch">
          Don't have an account?{" "}
          <Link to="/register" component={RouterLink} underline="none">
            Get started
          </Link>
        </Typography>

        <Box className="form_Container">
          <Typography variant="h4">Sign in to MUI Dash</Typography>
          <Typography paragraph color="textSecondary">
            Enter your details below.
          </Typography>

          {/* Buttons */}
          <AuthButtonGroup />

          {/* Section Divider */}
          <SectionDivider />

          {/* The Actual Form 👇 */}
          <FormLogin />
        </Box>
      </RightPanelStyle>
    </ContainerGridStyle>
  );
};

export default Login;
