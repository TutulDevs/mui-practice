import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";

const SectionDividerStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& .line": {
    flex: 1,
    height: 2,
    backgroundColor: theme.palette.gray.light,
  },
  "& .MuiTypography-button": {
    padding: `0 ${theme.spacing(2)}px`,
  },
}));

const SectionDivider = () => {
  return (
    <SectionDividerStyle>
      <Box className="line" />
      <Typography variant="button" component="h5" color="textSecondary">
        {" "}
        OR{" "}
      </Typography>
      <Box className="line" />
    </SectionDividerStyle>
  );
};

export default SectionDivider;
