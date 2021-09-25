import { Container, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";

// components
import FixedCartCounter from "../components/Product/FixedCartCount";
import ProductActionBar from "../components/Product/ProductActionBar";
import ProductList from "../components/Product/ProductList";

// style
const ContainerStyle = styled(Container)(({ theme }) => ({
  padding: 0,
  paddingTop: theme.spacing(2),

  // product header
  // h3
  "& .productHeader": {
    fontSize: 30,
    fontWeight: 500,
  },
}));

const Products = () => {
  return (
    <>
      {/* Fixed counter for cart */}
      <FixedCartCounter itemAmout="0" />

      {/* main container */}
      <ContainerStyle maxWidth="lg">
        {/* Header */}
        <Typography variant="h3" className="productHeader">
          Products
        </Typography>

        {/* Action bar */}
        <ProductActionBar />

        {/* Products list */}
        <ProductList />
      </ContainerStyle>
    </>
  );
};

export default Products;
