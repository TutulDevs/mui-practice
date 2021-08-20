import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";

// components
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/404";

const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/dashboard' />
          </Route>

          <Route path='/dashboard' component={Dashboard} exact />
          <Route path='/user' />
          <Route path='/product' />
          <Route path='/blog' />
          <Route path='/login' />
          <Route path='/register' />
          <Route path='/404' component={ErrorPage} />

          <Route path='*' component={ErrorPage} />
        </Switch>
      </Layout>
    </>
  );
};

export default App;
