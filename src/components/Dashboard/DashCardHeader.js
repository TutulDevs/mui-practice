import { CardHeader } from "@material-ui/core";
import { styled } from "@material-ui/styles";

const CardHeaderStyle = styled(CardHeader)(({ theme }) => ({
  padding: "24px 24px 0 24px",

  "& .MuiCardHeader-title": {
    fontSize: theme.spacing(2.5),
    fontWeight: 600,
  },
  "& .MuiCardHeader-subheader": {
    fontSize: theme.spacing(2),
    fontWeight: 300,
    color: theme.palette.gray.main,
  },
}));

const DashCardHeader = (props) => {
  return <CardHeaderStyle title={props.title} subheader={props.subheader} />;
};

export default DashCardHeader;
