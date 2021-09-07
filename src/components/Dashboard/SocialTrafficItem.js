import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";
import { Typography } from "@material-ui/core";

const SocialTrafficItem = ({ icon, amount, title }) => {
  const BoxItemStyle = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.gray.light}`,
    borderRadius: 8,
    minHeight: 150,
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& .MuiTypography-h5": {
      color:
        title === "Facebook"
          ? "rgb(24, 119, 242)"
          : title === "Google"
          ? "rgb(223, 62, 48)"
          : title === "LinkedIn"
          ? "rgb(0, 96, 151)"
          : title === "Twitter"
          ? "rgb(28, 156, 234)"
          : "salmon",
    },

    "& .MuiTypography-h6": {
      fontSize: 20,
      fontWeight: 600,
    },
    "& .MuiTypography-caption": {
      color: theme.palette.text.secondary,
    },
  }));

  return (
    <BoxItemStyle>
      <Typography variant="h5" component="h4">
        {icon}
      </Typography>

      <Typography variant="h6" component="h5">
        {amount}
      </Typography>

      <Typography variant="caption">{title}</Typography>
    </BoxItemStyle>
  );
};

export default SocialTrafficItem;
