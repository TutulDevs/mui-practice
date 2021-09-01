import { Box, styled } from "@material-ui/core";

// etc
import InfoCard from "./InfoCard";
import {
  AiFillAndroid,
  AiFillApple,
  AiFillWindows,
  AiFillBug,
} from "react-icons/ai";

// info card item list
const items = [
  {
    id: "green",
    icon: <AiFillAndroid />,
    count: "714k",
    title: "Weekly Sales",
  },
  { id: "blue", icon: <AiFillApple />, count: "1.35m", title: "New Users" },
  {
    id: "yellow",
    icon: <AiFillWindows />,
    count: "1.72m",
    title: "Item Orders",
  },
  { id: "maroon", icon: <AiFillBug />, count: "234", title: "Bug Reports" },
];

const ContainerStyle = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7.5),
  display: "grid",
  gap: theme.spacing(3),
  gridTemplateColumns: "repeat( auto-fit, minmax(200px, 1fr) )",
}));

const InfoCards = () => {
  return (
    <ContainerStyle>
      {items.map((el) => (
        <InfoCard
          key={el.id}
          colorId={el.id}
          icon={el.icon}
          amount={el.count}
          title={el.title}
        />
      ))}
    </ContainerStyle>
  );
};

export default InfoCards;
