import { Container } from "@material-ui/core";
import { styled } from "@material-ui/styles";

// components
import BlogHeader from "../components/Blog/BlogHeader";
import BlogFilters from "../components/Blog/BlogFilters";
import Blogs from "../components/Blog/Blogs";

// style
const ContainerStyle = styled(Container)(({ theme }) => ({
  padding: 0,
  paddingTop: theme.spacing(2),
}));

const Blog = () => {
  return (
    <ContainerStyle maxWidth="lg">
      {/* Header */}
      <BlogHeader />

      {/* Blog Filters */}
      <BlogFilters />

      {/* All blogs */}
      <Blogs />
    </ContainerStyle>
  );
};

export default Blog;
