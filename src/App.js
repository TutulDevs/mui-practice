import { Container, Typography } from "@material-ui/core";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <Container maxWidth='lg'>
          <Typography variant='h1' component='h1'>
            Hello there! Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Nulla libero tempore facere maxime voluptas. Provident,
            delectus voluptatibus perferendis dolorum sequi deleniti eos maxime
            iusto assumenda saepe numquam. Sunt, accusamus sit?
          </Typography>
        </Container>
      </Layout>
    </>
  );
};

export default App;
