import { Card } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";

const ProductListItem = (props) => {
  const { id, title, price, priceSale, productImage, status, colors } =
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
    </Card>
  );
};

export default ProductListItem;
