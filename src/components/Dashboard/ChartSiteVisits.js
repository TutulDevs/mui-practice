import { Box } from "@material-ui/core";
import Chart from "react-apexcharts";
import DashCard from "./DashCard";
import DashCardHeader from "./DashCardHeader";

// chart data series
const SERIES = [
  {
    name: "Team A",
    type: "column",
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
  },
  {
    name: "Team B",
    type: "area",
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
  },
  {
    name: "Team C",
    type: "line",
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
  },
];

const ChartSiteVisits = () => {
  const options = {
    chart: {
      id: "basic-bar",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "15%",
        borderRadius: 4,
      },
    },
    stroke: { curve: "smooth", width: [0, 2, 3] },
    markers: { size: 0 },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    xaxis: {
      type: "datetime",
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    tooltip: {
      shared: true,
      intersect: false,
      x: { show: false },
      y: {
        formatter: (val) =>
          val !== undefined ? `${val.toFixed(0)} visits` : val,
      },
      style: {
        fontFamily: "inherit",
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
  };

  return (
    <DashCard>
      <DashCardHeader
        title="Website Visits"
        subheader="(+43%) than last year"
      />

      <Box sx={{ p: 3, pb: 1 }}>
        <Chart options={options} series={SERIES} type="line" />
      </Box>
    </DashCard>
  );
};

export default ChartSiteVisits;
