import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { Link, Modal, Typography } from "@material-ui/core";
import { Box } from "@mui/system";

// components
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/404";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import User from "./pages/User";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);

  // show on mount
  useEffect(() => setShowModal(true), []);

  return (
    <>
      {/* Modal */}
      <Modal
        open={showModal}
        onClose={toggleShowModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            margin: "auto",
            maxWidth: 450,
            bgcolor: "#ffffff",
            outline: "none",
            borderRadius: 3,
            minHeight: 150,
            p: 3,
            textAlign: "justify",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Hi there 👋{" "}
          </Typography>

          <Typography paragraph>
            Thanks for checking this site. This is a cloned dashboard from
            Material-UI to practice MUI.
          </Typography>
          <Typography paragraph>
            The main focus of this project was the UI. I know there are some
            bugs in it. If you're a developer & want to help, please check the{" "}
            <Link
              href="https://github.com/TutulDevs/mui-practice"
              target="_blank"
              rel="noopener noreferrer"
            >
              repo
            </Link>
            .
          </Typography>

          <Typography paragraph>
            PS: I'm looking for an entry level job. If you've any opportunity,
            please knock me. 🙏
          </Typography>
        </Box>
      </Modal>

      {/* Dashboard */}
      <DashboardLayout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/dashboard" />
          </Route>

          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/user" component={User} />
          <Route path="/product" component={Products} />
          <Route path="/blog" component={Blog} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/404" component={ErrorPage} />

          <Route path="*" component={ErrorPage} />
        </Switch>
      </DashboardLayout>
    </>
  );
};

export default App;
