import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";

// section Header
const SectionHeaderStyle = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 500,
  marginTop: theme.spacing(2.25),
  marginBottom: theme.spacing(1),
}));

const DrawerContentCard = ({ title, children }) => {
  return (
    <>
      <SectionHeaderStyle>{title}</SectionHeaderStyle>

      <Box>{children}</Box>
    </>
  );
};

export default DrawerContentCard;
