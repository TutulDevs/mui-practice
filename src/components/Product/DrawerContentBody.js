import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Rating } from "@mui/material";
import DrawerContentCard from "./DrawerContentCard";
import { RiCheckboxBlankCircleFill, RiCheckLine } from "react-icons/ri";
import { Box } from "@mui/system";

// style
const ButtonStyle = styled(Button)(({ theme }) => ({
  justifyContent: "flex-start",
  alignItems: "center",

  "& .upText": {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(0.25),
    textTransform: "capitalize",
  },

  "&:hover": {
    backgroundColor: theme.palette.green.lighter,
    opacity: 0.5,
  },
}));

// price radio
const PRICE_SORT = [
  { val: "below25", title: "Below $25" },
  { val: "25to75", title: "Between $25-$75" },
  { val: "above75", title: "Above $75" },
];

// colors
const COLORS_TO_PICK = [
  "#00AB55",
  "#000000",
  "#FFFFFF",
  "#FFC0CB",
  "#FF4842",
  "#1890FF",
  "#94D82D",
  "#FFC107",
];

const DrawerContentBody = () => {
  return (
    <>
      {/* Gender */}
      <DrawerContentCard title="Gender">
        <FormGroup>
          {["Men", "Women", "Kids"].map((el, idx) => (
            <FormControlLabel
              key={el + idx}
              control={<Checkbox />}
              label={el}
            />
          ))}
        </FormGroup>
      </DrawerContentCard>

      {/* Category */}
      <DrawerContentCard title="Category">
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="category"
            defaultValue="none"
            name="category-name"
          >
            {["All", "Shoes", "Apparel", "Accessories"].map((el, idx) => (
              <FormControlLabel
                key={el + idx}
                value={el.toLowerCase()}
                control={<Radio />}
                label={el}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </DrawerContentCard>

      {/* Colors later */}
      <DrawerContentCard title="Colour">
        <Box
          sx={{
            display: "grid",
            gap: "4px 16px",
            gridTemplateColumns: "repeat(3, 32px)",
          }}
        >
          {COLORS_TO_PICK.map((el, idx) => (
            <Box
              key={el + idx}
              sx={{
                width: 24,
                height: 24,
                border: el === "#FFFFFF" ? "1px solid #eee" : "0",
                borderRadius: "50%",
                margin: 1,
                backgroundColor: el,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Checkbox
                aria-label={`color: ${el}`}
                icon={<RiCheckboxBlankCircleFill style={{ color: el }} />}
                checkedIcon={
                  <RiCheckLine
                    fontSize="small"
                    style={{ color: el === "#FFFFFF" ? "black" : "white" }}
                  />
                }
              />
            </Box>
          ))}
        </Box>
      </DrawerContentCard>

      {/* Price */}
      <DrawerContentCard title="Price">
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="sortByPrice"
            defaultValue="none"
            name="price-name"
          >
            {PRICE_SORT.map((el, idx) => (
              <FormControlLabel
                key={el.val + idx}
                value={el.val}
                control={<Radio />}
                label={el.title}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </DrawerContentCard>

      {/* Ratings */}
      <DrawerContentCard title="Rating">
        {[4, 3, 2, 1].map((el) => (
          <ButtonStyle key={el} fullWidth>
            <Rating name={`ratingUp_${el}`} readOnly value={el} />
            <span className="upText">& up</span>
          </ButtonStyle>
        ))}
      </DrawerContentCard>
    </>
  );
};

export default DrawerContentBody;
