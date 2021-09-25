import {
  Button,
  Drawer,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";
import { useState } from "react";
import { BiFilter } from "react-icons/bi";
import DrawerContent from "./DrawerContent";

const ButtonStyle = styled(Button)(({ theme }) => ({
  fontWeight: 500,
  textTransform: "capitalize",
  padding: `4px 12px`,
  borderRadius: theme.spacing(1.25),

  "& .text": {
    fontWeight: 500,
  },
}));

const TextFieldStyle = styled(TextField)(({ theme }) => ({
  // select

  "& .MuiOutlinedInput-input": {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 10,
    color: theme.palette.text.secondary,
    fontWeight: 400,
  },
  "& .MuiMenu-paper": {
    marginTop: "50px !important",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: `0`,
    borderRadius: theme.spacing(0),
  },

  // menu item
  "& .MuiMenuItem-root": {
    color: "pink",
  },

  "& .MuiSelect-select:focus": {
    backgroundColor: "inherit",
  },
}));

const ProductActionBar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => setShowDrawer(!showDrawer);

  return (
    <Box
      sx={{
        marginTop: 4,
        marginBottom: 2,

        display: "grid",
        gap: 3,
        gridAutoFlow: "column",
        justifyContent: "end",
      }}
    >
      {/* click to open the drawer */}
      <ButtonStyle endIcon={<BiFilter />} onClick={toggleDrawer}>
        Filters
      </ButtonStyle>

      {/* Drawer */}
      <Drawer
        anchor="right"
        variant="temporary"
        open={showDrawer}
        onClose={toggleDrawer}
      >
        <DrawerContent closeDrawer={toggleDrawer} />
      </Drawer>

      {/* Sorter */}
      <ButtonStyle>
        <Typography variant="subtitle2" component="h4" className="text">
          Sort by:
        </Typography>

        <TextFieldStyle
          variant="outlined"
          id="selectSort"
          className="selectSort"
          select
          value="newest"
        >
          <MenuItem value="featured">Featured</MenuItem>
          <MenuItem value="newest">Newest</MenuItem>
          <MenuItem value="highToLow">Price: High-Low</MenuItem>
          <MenuItem value="lowToHigh">Price: Low-High</MenuItem>
        </TextFieldStyle>
      </ButtonStyle>
    </Box>
  );
};

export default ProductActionBar;
