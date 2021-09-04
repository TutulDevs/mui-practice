import ReactApexChart from "react-apexcharts";
import DashCard from "./DashCard";
import DashCardBox from "./DashCardBox";
import DashCardHeader from "./DashCardHeader";

const SERIES_DATA = [
  {
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
  },
];

const chartOptions = {
  chart: { toolbar: { show: false } },
  //markers: { show: false },
  xaxis: {
    categories: [
      "Italy",
      "Japan",
      "China",
      "Canada",
      "France",
      "Germany",
      "South Korea",
      "Netherlands",
      "United States",
      "United Kingdom",
    ],
  },
  plotOptions: {
    bar: {
      barHeight: "25%",
      borderRadius: 4,
      horizontal: true,
      colors: {
        ranges: [
          {
            color: "#ff0",
          },
        ],
      },
    },
  },
  dataLabels: { enabled: false },
  tooltip: {
    marker: { show: false },

    x: { show: false },
    y: {
      title: {
        formatter: (sname) => `#${sname}`,
      },
    },
  },
};

const ConversionRate = () => {
  return (
    <DashCard>
      <DashCardHeader
        title="Conversion Rates"
        subheader="(+43%) than last year"
      />

      <DashCardBox>
        <ReactApexChart
          type="bar"
          series={SERIES_DATA}
          options={chartOptions}
          height={350}
        />
      </DashCardBox>
    </DashCard>
  );
};

export default ConversionRate;
