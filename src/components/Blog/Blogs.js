import { Avatar, Grid, Link, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";
import BlogSocialInfo from "./BlogSocialInfo";

const GridContainerStyle = styled(Grid)(({ theme }) => ({
  // border: "1px solid",
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
}));

const GridItemStyle = styled(Grid)(({ theme }) => ({
  "& .boxContainer": {
    //   border: "1px solid #eee",
    borderRadius: theme.spacing(1.5),
    minHeight: 250,
    margin: 0,
    padding: theme.spacing(3),
    position: "relative",

    display: "grid",
    gridTemplateRows: `80px 1fr`,

    "&::before": {
      content: `""`,
      display: "block",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      borderRadius: "inherit",
    },

    // textContent
    "& .textContainer": {
      color: theme.palette.common.white,
      zIndex: 100,
      display: "grid",
      gap: 12,
      justifyItems: "end",
    },

    // link
    "& a": {
      color: "inherit",
      display: "block",
      marginTop: 8,
    },

    // socialInfo
    "& .socialInfo": {
      border: "1px solid salmon",
      padding: 4,
      color: "#c7c7c7",
    },
  },
}));

const text = `Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!`;
const avatarSrc = `https://i.pravatar.cc/100`;

// list of the items/blogs
const blogList = [
  {
    dateTime: "01 June 2021",
    title:
      "Tesla Cybertruck-inspired camper trailer for Tesla fans who can’t just wait for the truck!",
    path: "#",
    social: { comment: "76.46k", views: "90.58k", share: "77.89k" },
  },
  {
    dateTime: "05 November 2020",
    title: "title_02",
    path: "#",
    social: { comment: "76.46k", views: "90.58k", share: "77.89k" },
  },
  {
    dateTime: "01 February 2020",
    title: "title_03",
    path: "#",
    social: { comment: "76.46k", views: "90.58k", share: "77.89k" },
  },
];

const firstBlogItem = blogList[0];
console.log(firstBlogItem);

const Blogs = () => {
  return (
    <GridContainerStyle container spacing={3}>
      {/* Site visits chart */}
      <GridItemStyle item xs={12} md={6} lg={6}>
        <Box
          className="boxContainer"
          sx={{
            backgroundImage: `url('https://source.unsplash.com/random/600x400')`,
          }}
        >
          <Avatar src="https://i.pravatar.cc/100" alt={firstBlogItem.title} />

          <Box className="textContainer">
            <Box>
              <Typography variant="caption">
                {firstBlogItem.dateTime}
              </Typography>

              <Typography variant="h5">
                <Link href={firstBlogItem.path} underline="hover">
                  {firstBlogItem.title}
                </Link>
              </Typography>
            </Box>

            {/* Blog Social Info */}
            <BlogSocialInfo
              comments={firstBlogItem.social.comment}
              views={firstBlogItem.social.views}
              shares={firstBlogItem.social.share}
            />
          </Box>
        </Box>
      </GridItemStyle>

      {/* Current Visits */}
      <GridItemStyle item xs={12} md={6} lg={3}>
        <Box className="boxContainer">
          Two
          <Typography variant="h5">
            {[...text].slice(0, 50).join("") + "..."}
          </Typography>
        </Box>
      </GridItemStyle>

      {/* Conversion Rates */}
      <GridItemStyle item xs={12} md={6} lg={3}>
        <Box className="boxContainer">
          Three
          <Typography variant="h5">
            {[...text].slice(0, 50).join("") + "..."}
          </Typography>
        </Box>
      </GridItemStyle>

      {/* Conversion Rates */}
      <GridItemStyle item xs={12} md={6} lg={3}>
        <Box className="boxContainer">
          Four
          <Typography variant="h5">
            {[...text].slice(0, 50).join("") + "..."}
          </Typography>
        </Box>
      </GridItemStyle>

      {/* Conversion Rates */}
      <GridItemStyle item xs={12} md={6} lg={3}>
        <Box className="boxContainer">
          Five
          <Typography variant="h5">
            {[...text].slice(0, 50).join("") + "..."}
          </Typography>
        </Box>
      </GridItemStyle>

      {/* Conversion Rates */}
      <GridItemStyle item xs={12} md={6} lg={3}>
        <Box className="boxContainer">
          Six
          <Typography variant="h5">
            {[...text].slice(0, 50).join("") + "..."}
          </Typography>
        </Box>
      </GridItemStyle>

      {/* Conversion Rates */}
      <GridItemStyle item xs={12} md={6} lg={3}>
        <Box className="boxContainer">
          Seven
          <Typography variant="h5">
            {[...text].slice(0, 50).join("") + "..."}
          </Typography>
        </Box>
      </GridItemStyle>
    </GridContainerStyle>
  );
};

export default Blogs;
