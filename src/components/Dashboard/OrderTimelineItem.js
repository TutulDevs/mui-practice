import { Typography } from "@material-ui/core";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import { styled } from "@material-ui/styles";

const OrderTimelineItem = ({ type, title, time, isLast }) => {
  const TimelineDotStyle = styled(TimelineDot)(({ theme }) => ({
    boxShadow: "none",
    backgroundColor:
      type === "order1"
        ? theme.palette.primary.main
        : type === "order2"
        ? theme.palette.success.main
        : type === "order3"
        ? theme.palette.warning.main
        : type === "order4"
        ? theme.palette.info.main
        : "salmon",
  }));

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDotStyle />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          {time}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default OrderTimelineItem;
