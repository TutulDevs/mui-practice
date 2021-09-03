import { Link, Typography } from "@material-ui/core";
import InfoCards from "../components/Dashboard/InfoCards";

const Dashboard = () => {
  return (
    <>
      <Typography variant="h6" component="h2">
        Hi, Welcome in MUI Dash. This project is under construction. Visit the{" "}
        <Link
          href="https://github.com/TutulDevs/mui-practice"
          target="_blank"
          rel="noopener noreferrer"
        >
          repo
        </Link>{" "}
        if you're interested. Thanks.
      </Typography>
      {/* Info Cards */}
      <InfoCards />
    </>
  );
};

export default Dashboard;
