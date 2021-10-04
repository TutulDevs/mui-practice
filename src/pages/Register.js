import { Typography, Link, Container } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";
import { Helmet } from "react-helmet";
import { Link as RouterLink } from "react-router-dom";
import AuthButtonGroup from "../components/AuthPages/ButtonGroup";
import FormRegister from "../components/AuthPages/FormRegister";
import LeftPanel from "../components/AuthPages/LeftPanel";
import SectionDivider from "../components/AuthPages/SectionDivider";

// img
import RegisterPhoto from "../images/auth/register.png";

// styles
const ContainerBoxStyle = styled(Box)(({ theme }) => ({
  minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight * 2}px)`,
  display: "grid",
  gap: theme.spacing(3),
  gridTemplateColumns: `350px 1fr`,

  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: `1fr`,
  },
}));

const RightPanelStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  "& .account_switch": {
    textAlign: "right",
    paddingRight: theme.spacing(3),
    marginBottom: theme.spacing(8),
    "& .MuiLink-underlineNone	": {
      color: theme.palette.green.darker,
      fontWeight: 500,
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing(1.5),
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

  "& .terms": {
    display: "block",
    marginTop: "24px !important",
    fontSize: 12,
    textAlign: "justify",

    "& a": {
      textDecorationColor: theme.palette.success.light,
      "&:hover": {
        textDecorationColor: theme.palette.common.black,
      },
    },
  },
}));

const Register = () => {
  const preventDefault = (e) => e.preventDefault();

  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Register | MUI Dash</title>
      </Helmet>

      <ContainerBoxStyle container>
        <LeftPanel
          title="Manage the job more effectively with Minimal"
          img={RegisterPhoto}
          imgAlt="Register Image"
        />

        <RightPanelStyle>
          <Typography paragraph className="account_switch">
            Already have an account?{" "}
            <Link to="/login" component={RouterLink} underline="none">
              Login
            </Link>
          </Typography>

          <Container maxWidth="xs" className="form_Container">
            <Typography variant="h4">Get started absolutely free.</Typography>
            <Typography paragraph color="textSecondary">
              Free forever. No credit card needed.
            </Typography>

            {/* Buttons */}
            <AuthButtonGroup />

            {/* Section Divider */}
            <SectionDivider />

            {/* The Actual Form 👇 */}
            <FormRegister />

            {/* Terms */}
            <Typography paragraph color="textSecondary" className="terms">
              By registering, I agree to MUI Dash{" "}
              <Link
                href="#"
                onClick={preventDefault}
                underline="always"
                color="textPrimary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                onClick={preventDefault}
                underline="always"
                color="textPrimary"
              >
                Privacy Policy
              </Link>
              .
            </Typography>
          </Container>
        </RightPanelStyle>
      </ContainerBoxStyle>
    </>
  );
};

export default Register;
