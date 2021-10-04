import { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

// components
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/404";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import User from "./pages/User";
import IntroModal from "./components/UI/IntroModal";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal(!showModal);

  // show on mount
  useEffect(() => setShowModal(true), []);

  return (
    <>
      {/* Modal */}
      <IntroModal showModal={showModal} onToggle={toggleShowModal} />

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
