import { Card, Link, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";
import { Link as RouteLink } from "react-router-dom";
import ProductColorPreview from "./ProductColorPreview";
import ProductPrice from "./ProductPrice";

// card style
const CardStyle = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px`,
}));

const ProductListItem = (props) => {
  const { title, price, priceSale, productImage, status, colors } =
    props.product;

  // label style
  const LabelStyle = styled("label")(({ theme }) => ({
    fontWeight: 600,
    color: "white",
    backgroundColor:
      status === "sale" ? theme.palette.error.main : theme.palette.success.main,
    padding: "4px 6px",
    borderRadius: theme.spacing(1),
    zIndex: 9,
    position: "absolute",
    top: theme.spacing(2),
    right: theme.spacing(2),
    textTransform: "uppercase",
  }));

  return (
    <CardStyle>
      {/* Image with Label */}
      <Box sx={{ pt: "100%", position: "relative" }}>
        {status && <LabelStyle>{status}</LabelStyle>}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
          }}
          component="img"
          src={productImage}
          alt={title}
        />
      </Box>

      {/* bottom of the card */}
      <Box sx={{ py: 2.5, px: 3 }}>
        <Link component={RouteLink} to="/" underline="hover" color="inherit">
          <Typography variant="subtitle1" noWrap>
            {title}
          </Typography>
        </Link>

        {/* Price & Color box */}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ProductColorPreview colors={colors} limit={3} />

          <ProductPrice price={price} priceSale={priceSale} />
        </Box>
      </Box>
    </CardStyle>
  );
};

export default ProductListItem;
