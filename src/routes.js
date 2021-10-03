import DashboardLayout from "./layout/DashboardLayout";
import AuthLayout from "./layout/AuthLayout";

// components
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/404";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import Products from "./pages/Products";
import User from "./pages/User";

const PageRoutes = [
  // default
  {
    path: "/",
    component: DashboardLayout,
    routes: [{ path: "/", component: Dashboard }],
  },
  // auth
  {
    path: "/auth",
    component: AuthLayout,
    routes: [
      { path: "/auth/login", component: Login },
      { path: "/auth/register", component: Register },
    ],
  },
  // dash
  {
    path: "/dashboard",
    component: DashboardLayout,
    routes: [
      { path: "/dashboard/app", component: Dashboard },
      { path: "/dashboard/user", component: User },
      { path: "/dashboard/products", component: Products },
      { path: "/dashboard/blog", component: Blog },
    ],
  },
  // error
  { path: "*", component: ErrorPage },
];

export default PageRoutes;

/*

Tried this code in the App.js but it didn't work.

///
import PageRoutes from "./routes";
console.log(PageRoutes);

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      // pass the sub-routes to nest
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
};

///

const App = () => {
  return (
    <Switch>
      {PageRoutes.map((route, idx) => (
        <RouteWithSubRoutes key={idx} {...route} />
      ))}
    </Switch>
  );
};


*/
