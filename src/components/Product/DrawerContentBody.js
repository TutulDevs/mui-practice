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
