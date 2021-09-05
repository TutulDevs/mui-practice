import { Grid, Link, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import ChartCurrentSubject from "../components/Dashboard/ChartCurrentSubject";
import ChartSiteVisits from "../components/Dashboard/ChartSiteVisits";
import ConversionRate from "../components/Dashboard/ConversionRate";
import CurrentVisits from "../components/Dashboard/CurrentVisits";
import InfoCards from "../components/Dashboard/InfoCards";
import NewsUpdate from "../components/Dashboard/NewsUpdate";

// grid container style
const GridContainerStyle = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

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

      <GridContainerStyle container spacing={3}>
        {/* Site visits chart */}
        <Grid item xs={12} md={6} lg={8}>
          <ChartSiteVisits />
        </Grid>

        {/* Current Visits */}
        <Grid item xs={12} md={6} lg={4}>
          <CurrentVisits />
        </Grid>

        {/* Conversion Rates */}
        <Grid item xs={12} md={6} lg={8}>
          <ConversionRate />
        </Grid>

        {/* Current Subject */}
        <Grid item xs={12} md={6} lg={4}>
          <ChartCurrentSubject />
        </Grid>

        {/* News Update */}
        <Grid item xs={12} md={6} lg={8}>
          <NewsUpdate />
        </Grid>
      </GridContainerStyle>
    </>
  );
};

export default Dashboard;
