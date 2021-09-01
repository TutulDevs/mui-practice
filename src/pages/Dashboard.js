import { Typography } from "@material-ui/core";
import InfoCards from "../components/Dashboard/InfoCards";

const Dashboard = () => {
  return (
    <>
      <Typography variant="h6" component="h2">
        Hi, Welcome back
      </Typography>

      {/* Info Cards */}
      <InfoCards />
    </>
  );
};

export default Dashboard;
