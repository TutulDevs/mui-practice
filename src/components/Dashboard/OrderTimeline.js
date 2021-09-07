import { Timeline } from "@material-ui/lab";
import { styled } from "@material-ui/styles";
import DashCard from "./DashCard";
import DashCardHeader from "./DashCardHeader";
import OrderTimelineItem from "./OrderTimelineItem";

const TimelineStyle = styled(Timeline)(({ theme }) => ({
  paddingLeft: theme.spacing(6),

  "& .MuiTimelineItem-missingOppositeContent:before": {
    display: "none",
  },
  "& .MuiTimelineContent-root": {
    paddingTop: 3,
  },
}));

// timeline list
const timelineList = [
  {
    title: "1983, orders, $4220",
    time: "08 Aug 2021 21:53",
    type: "order1",
  },
  {
    title: "12 Invoices have been paid",
    time: "29 Jun 2021 08:40",
    type: "order2",
  },
  {
    title: "Order #37745 from September",
    time: "02 Aug 2021 04:21",
    type: "order3",
  },
  {
    title: "New order placed #XF-2356",
    time: "18 Apr 2021 21:51",
    type: "order4",
  },
  {
    title: "New order placed #XF-2346",
    time: "03 Oct 2020 04:27",
    type: "order5",
  },
];

const OrderTimeline = () => {
  return (
    <DashCard>
      <DashCardHeader title="Order Timeline" />

      <TimelineStyle>
        {timelineList.map((item, index) => (
          <OrderTimelineItem
            key={item.type}
            type={item.type}
            title={item.title}
            time={item.time}
            isLast={index === timelineList.length - 1}
          />
        ))}
      </TimelineStyle>
    </DashCard>
  );
};

export default OrderTimeline;
