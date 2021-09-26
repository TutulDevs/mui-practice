import { Card, Link, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";
import { Link as RouteLink } from "react-router-dom";
import ProductPrice from "./ProductPrice";

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
    <Card>
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
      <Box sx={{ padding: 2 }}>
        <Link component={RouteLink} to="/" underline="hover" color="inherit">
          <Typography variant="subtitle1" noWrap>
            {title}
          </Typography>
        </Link>

        {/* Price & Color box */}
        <Box
          sx={{
            // border: "1px solid #eee",
            mt: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Colors</span>

          <ProductPrice price={price} priceSale={priceSale} />
        </Box>
      </Box>
    </Card>
  );
};

export default ProductListItem;
