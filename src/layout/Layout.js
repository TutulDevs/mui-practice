import { makeStyles } from "@material-ui/styles";
import Footer from "./Footer";
import MainHeader from "./MainHeader";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8),
  },
}));

const Layout = (props) => {
  const classes = useStyles();

  return (
    <>
      <MainHeader />

      <main className={classes.main}>{props.children}</main>

      <Footer />
    </>
  );
};

export default Layout;
