import { Button } from "@material-ui/core";
import { Box } from "@mui/system";

// icons
import { RiFacebookFill, RiGoogleFill, RiTwitterFill } from "react-icons/ri";

// icons list
const items = [
  {
    title: "Google",
    icon: <RiGoogleFill />,
    color: "rgb(223, 62, 48)",
  },
  {
    title: "Facebook",
    icon: <RiFacebookFill />,
    color: "rgb(24, 119, 242)",
  },
  {
    title: "Twitter",
    icon: <RiTwitterFill />,
    color: "rgb(28, 156, 234)",
  },
];

const AuthButtonGroup = () => {
  return (
    <Box
      sx={{
        my: 2,
        display: "grid",
        gap: 1,
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {items.map(({ title, icon, color }) => (
        <Button
          key={title}
          variant="outlined"
          aria-label={title}
          style={{
            color,
            padding: "12px 0",
            fontSize: 20,
            borderRadius: 8,
          }}
        >
          {icon}
        </Button>
      ))}
    </Box>
  );
};

export default AuthButtonGroup;
