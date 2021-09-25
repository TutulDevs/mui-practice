import { Grid } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { products } from "../../api/productApi";
import ProductListItem from "./ProductListItem";

// grid style
const GridStyle = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const ProductList = () => {
  return (
    <GridStyle container spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ProductListItem key={product.id} product={product} />
        </Grid>
      ))}
    </GridStyle>
  );
};

export default ProductList;
