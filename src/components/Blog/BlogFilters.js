import { useState } from "react";
import { InputAdornment, MenuItem, TextField } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Autocomplete } from "@mui/material";
import { Box } from "@mui/system";
import { FiSearch } from "react-icons/fi";

// blogs
import { blogList } from "../../api/blogApi";

// style
const BoxStyle = styled(Box)(({ theme }) => ({
  // root
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
      paddingTop: 1,
      paddingBottom: 1,
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

  // select
  "& .selectFilter": {
    "& .MuiOutlinedInput-input": {
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 12,
    },
    "& .MuiMenu-paper": {
      marginTop: "50px !important",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${theme.palette.text.secondary}`,
      borderRadius: theme.spacing(1),
    },

    // menu item
    "& .MuiMenuItem-root": {
      color: "pink",
    },
  },
}));

// filter
const filterItems = [
  { id: "el1", type: "Latest" },
  { id: "el2", type: "Popular" },
  { id: "el3", type: "Oldest" },
];

const BlogFilters = () => {
  const [filterType, setFilterType] = useState("Latest");
  const handleFilterTypeChange = (e) => setFilterType(e.target.value);

  return (
    <BoxStyle>
      {/* auto complete */}
      <Autocomplete
        id="combo"
        options={blogList}
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

      {/* select with text field */}
      <TextField
        variant="outlined"
        id="selectTextField"
        className="selectFilter"
        select
        value={filterType}
        onChange={handleFilterTypeChange}
      >
        {filterItems.map((el) => (
          <MenuItem key={el.id} value={el.type}>
            {el.type}
          </MenuItem>
        ))}
      </TextField>
    </BoxStyle>
  );
};

export default BlogFilters;
