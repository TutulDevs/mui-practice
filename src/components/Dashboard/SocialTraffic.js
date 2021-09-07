import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";
import DashCard from "./DashCard";
import DashCardHeader from "./DashCardHeader";
import SocialTrafficItem from "./SocialTrafficItem";

// icons
import {
  RiFacebookFill,
  RiGoogleFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";

const BoxContainerStyle = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: "grid",
  gap: theme.spacing(2),
  gridTemplateColumns: `repeat(2, 1fr)`,
}));

// items list
const list = [
  {
    title: "Facebook",
    amount: "47.10k",
    icon: <RiFacebookFill />,
  },
  {
    title: "Google",
    amount: "65.60k",
    icon: <RiGoogleFill />,
  },
  {
    title: "LinkedIn",
    amount: "84.14k",
    icon: <RiLinkedinFill />,
  },
  {
    title: "Twitter",
    amount: "15.70k",
    icon: <RiTwitterFill />,
  },
];

const SocialTraffic = () => {
  return (
    <DashCard>
      <DashCardHeader title="Traffic by Site" />

      <BoxContainerStyle>
        {list.map((el) => (
          <SocialTrafficItem
            key={el.title}
            icon={el.icon}
            amount={el.amount}
            title={el.title}
          />
        ))}
      </BoxContainerStyle>
    </DashCard>
  );
};

export default SocialTraffic;
