import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import "./App.css";

// components
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/404";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/dashboard" />
          </Route>

          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/user" />
          <Route path="/product" />
          <Route path="/blog" />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/404" component={ErrorPage} />

          <Route path="*" component={ErrorPage} />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
