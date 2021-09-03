import { Box, styled, Typography } from "@material-ui/core";

const InfoCard = ({ colorId, icon, amount, title }) => {
  const CardStyle = styled(Box)(({ theme }) => ({
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    borderRadius: theme.spacing(1.5),
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor:
      colorId === "green"
        ? theme.palette.green.light
        : colorId === "blue"
        ? theme.palette.blue.light
        : colorId === "yellow"
        ? theme.palette.yellow.light
        : colorId === "maroon"
        ? theme.palette.maroon.light
        : "salmon",
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(2.5),
      paddingBottom: theme.spacing(2.5),
    },
  }));

  const IconStyle = styled(Box)(({ theme }) => ({
    display: "grid",
    placeItems: "center",
    width: 62,
    height: 62,
    borderRadius: "50%",
    fontSize: theme.spacing(3),
    color:
      colorId === "green"
        ? theme.palette.green.main
        : colorId === "blue"
        ? theme.palette.blue.main
        : colorId === "yellow"
        ? theme.palette.yellow.main
        : colorId === "maroon"
        ? theme.palette.maroon.main
        : "salmon",
    background:
      colorId === "green"
        ? `linear-gradient(135deg, transparent 0%, rgba(0, 123, 85, 0.24) 100%)`
        : colorId === "blue"
        ? `linear-gradient(135deg, transparent 0%, rgba(12, 83, 183, 0.24) 100%)`
        : colorId === "yellow"
        ? `linear-gradient(135deg, transparent 0%, rgba(183, 129, 3, 0.24) 100%)`
        : colorId === "maroon"
        ? `linear-gradient(135deg, transparent 0%, rgba(183, 33, 54, 0.24) 100%)`
        : "salmon",
  }));

  const AmountStyle = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(0.5),
    fontSize: theme.spacing(3.5),
    color:
      colorId === "green"
        ? theme.palette.green.main
        : colorId === "blue"
        ? theme.palette.blue.main
        : colorId === "yellow"
        ? theme.palette.yellow.main
        : colorId === "maroon"
        ? theme.palette.maroon.main
        : "salmon",
  }));

  const TitleStyle = styled(Typography)(({ theme }) => ({
    margin: 0,
    opacity: 0.75,
    color:
      colorId === "green"
        ? theme.palette.green.dark
        : colorId === "blue"
        ? theme.palette.blue.dark
        : colorId === "yellow"
        ? theme.palette.yellow.dark
        : colorId === "maroon"
        ? theme.palette.maroon.dark
        : "salmon",
  }));

  return (
    <CardStyle>
      <IconStyle>{icon}</IconStyle>

      <AmountStyle variant="h6" component="h3">
        {amount}
      </AmountStyle>

      <TitleStyle variant="button" component="h5">
        {title}
      </TitleStyle>
    </CardStyle>
  );
};

export default InfoCard;
