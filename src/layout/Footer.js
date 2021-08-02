import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#eee",
    padding: "0.5rem",
    textAlign: "center",
  },
  para: {
    fontSize: "0.75rem",
    fontWeight: 200,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Container component='footer' disableGutters className={classes.container}>
      <Typography variant='subtitle2' component='p' className={classes.para}>
        @ Tutul
      </Typography>
    </Container>
  );
};

export default Footer;
