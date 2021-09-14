import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Autocomplete } from "@mui/material";
import { Box } from "@mui/system";

import { FiSearch } from "react-icons/fi";

// style
const BoxStyle = styled(Box)(({ theme }) => ({
  // root
  //border: "1px solid salmon",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),

  // pop up indicator, down caret icon
  "& .MuiAutocomplete-popupIndicator": {
    display: "none",
  },

  // textfield
  "& .searchField": {
    "& .MuiInputBase-root": {
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
    },
    "& .MuiAutocomplete-hasPopupIcon": {
      paddingRight: 30,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.text.secondary}`,
      borderRadius: theme.spacing(1),
    },
  },
}));

// data for options
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
];

const BlogFilters = () => {
  return (
    <BoxStyle>
      {/* auto complete */}
      <Autocomplete
        id="combo"
        options={top100Films}
        getOptionLabel={(item) => item.title}
        style={{ width: 220 }}
        renderInput={(params) => (
          <TextField
            className="searchField"
            {...params}
            variant="outlined"
            placeholder="Search Post..."
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <FiSearch />
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      {/* select filter */}
      <FormControl variant="outlined">
        <Select id="selectFilter" value="age">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </BoxStyle>
  );
};

export default BlogFilters;
