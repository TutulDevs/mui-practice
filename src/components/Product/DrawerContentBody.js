import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import DrawerContentCard from "./DrawerContentCard";

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
            defaultValue="all"
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
    </>
  );
};

export default DrawerContentBody;
