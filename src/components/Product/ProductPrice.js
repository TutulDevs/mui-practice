import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";

// style
const TextStyle = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  "& .disabledText": {
    fontSize: 16,
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(0.5),
    textDecoration: "line-through",
  },
}));

const ProductPrice = ({ price, priceSale }) => {
  return (
    <TextStyle variant="subtitle2">
      {priceSale && (
        <span className="disabledText">${priceSale.toFixed(2)}</span>
      )}

      <span>${price.toFixed(2)}</span>
    </TextStyle>
  );
};

export default ProductPrice;
