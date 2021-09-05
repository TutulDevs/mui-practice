import { Link as RouterLink } from "react-router-dom";
import { styled } from "@material-ui/styles";
import { Box, Button, Divider } from "@material-ui/core";
import DashCard from "./DashCard";
import DashCardHeader from "./DashCardHeader";
import { GrFormNext } from "react-icons/gr";

// Button Style
const ButtonStyle = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  textTransform: "inherit",
  fontWeight: 600,
  padding: "2px 4px",
  "&:hover": {
    backgroundColor: theme.palette.gray.light,
  },
}));

const NewsUpdate = () => {
  return (
    <DashCard>
      <DashCardHeader title="News Update" />

      {/* Main Content */}

      {/* footer */}

      <Divider />
      <Box
        sx={{
          py: 2,
          px: 3,
          textAlign: "right",
        }}
      >
        <Button
          to="/"
          component={RouterLink}
          size="small"
          color="inherit"
          endIcon={<GrFormNext />}
        >
          View All
        </Button>
      </Box>
    </DashCard>
  );
};

export default NewsUpdate;
