import { Avatar, Grid, Link, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";
import BlogSocialInfo from "./BlogSocialInfo";

// styles
const GridContainerStyle = styled(Grid)(({ theme }) => ({
  // border: "1px solid",
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2),
}));

const GridItemStyle = styled(Grid)(({ theme }) => ({
  "& .boxContainer": {
    //   border: "1px solid #eee",
    borderRadius: theme.spacing(1.5),
    minHeight: 350,
    margin: 0,
    padding: theme.spacing(3),
    position: "relative",
    transition: "all 0.3s ease-in-out",

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
      backgroundColor: "rgba(0,0,0,0.7)",
      borderRadius: "inherit",
    },

    "&:hover": {
      transition: "all 0.3s ease-in-out",
      transform: `translateY(-5px)`,
      boxShadow: theme.shadows[8],
    },

    // textContent
    "& .textContainer": {
      color: theme.palette.common.white,
      zIndex: 100,
      display: "grid",
      gap: 12,
      alignContent: "space-between",
    },

    // link
    "& a": {
      color: "inherit",
      display: "block",
      marginTop: 8,
    },
  },
}));

const NewBoxStyle = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.gray.light}`,
  borderRadius: theme.spacing(1.5),
  minHeight: 350,
  margin: 0,
  position: "relative",
  transition: "all 0.3s ease-in-out",
  boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px`,

  display: "grid",
  gridTemplateRows: `200px auto`,

  "&:hover": {
    transition: "all 0.3s ease-in-out",
    boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 4px 8px -2px`,
  },

  "& .imgContainer": {
    position: "relative",
    "&::before": {
      content: `""`,
      display: "block",
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,0.45)",
      borderRadius: "inherit",
    },
  },

  "& .textContainer": {
    padding: `0 ${theme.spacing(3)}px ${theme.spacing(3)}px`,

    display: "grid",
    gap: theme.spacing(2),

    "& .MuiAvatar-root": {
      backgroundColor: theme.palette.common.white,
      padding: 10,
      width: 50,
      height: 50,
      transform: `translateY(-50%)`,

      "& img": {
        borderRadius: "50%",
        width: 40,
        height: 40,
      },
    },

    "& .dateTime": {
      marginTop: "-15px",
      color: theme.palette.text.disabled,
    },

    "& .linkTitle": {
      "& a": {
        fontSize: 20,
        color: "inherit",
        display: "block",
      },
    },
  },
}));

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
  {
    dateTime: "03 February 2020",
    title: "title_04",
    path: "#",
    social: { comment: "76.46k", views: "90.58k", share: "77.89k" },
  },
  {
    dateTime: "05 February 2020",
    title: "title_05",
    path: "#",
    social: { comment: "76.46k", views: "90.58k", share: "77.89k" },
  },
];

const firstBlogItem = blogList[0];
const secondAndThirdItem = blogList.slice(1, 3);
const restOfTheArr = blogList.slice(3, blogList.length);

const Blogs = () => {
  return (
    <GridContainerStyle container spacing={3}>
      {/* First Item of the blog */}
      <GridItemStyle item xs={12} md={6} lg={6}>
        <Box
          className="boxContainer"
          sx={{
            backgroundImage: `url('https://source.unsplash.com/random/599x400')`,
          }}
        >
          <Avatar src="https://i.pravatar.cc/99" alt={firstBlogItem.title} />

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

      {/* Second and Third Items */}
      {secondAndThirdItem.map((el, idx) => (
        <GridItemStyle key={el.dateTime} item xs={12} md={6} lg={3}>
          <Box
            className="boxContainer"
            sx={{
              backgroundImage: `url('https://source.unsplash.com/random/600x40${idx}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <Avatar src={`https://i.pravatar.cc/10${idx}`} alt={el.title} />

            <Box className="textContainer">
              <Box>
                <Typography variant="caption">{el.dateTime}</Typography>

                <Typography variant="h5">
                  <Link href={el.path} underline="hover">
                    {el.title}
                  </Link>
                </Typography>
              </Box>

              {/* Blog Social Info */}
              <BlogSocialInfo
                comments={el.social.comment}
                views={el.social.views}
                shares={el.social.share}
              />
            </Box>
          </Box>
        </GridItemStyle>
      ))}
      {/* end of second & third */}

      {/* Rest of the Array data  */}
      {restOfTheArr.map((el, idx) => (
        <GridItemStyle key={el.dateTime} item xs={12} md={6} lg={3}>
          <NewBoxStyle>
            <Box
              className="imgContainer"
              sx={{
                backgroundImage: `url('https://source.unsplash.com/random/601x40${idx}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: `12px 12px 0 0`,
              }}
            />

            <Box className="textContainer">
              <Box
                sx={{
                  display: "grid",
                  gap: 1,
                }}
              >
                <Avatar
                  variant="circular"
                  src={`https://i.pravatar.cc/11${idx}`}
                  alt={el.title}
                />

                <Typography className="dateTime" variant="caption">
                  {el.dateTime}
                </Typography>

                <Typography className="linkTitle" variant="h5">
                  <Link href={el.path} underline="hover">
                    {el.title}
                  </Link>
                </Typography>
              </Box>

              {/* Blog Social Info */}
              <BlogSocialInfo
                comments={el.social.comment}
                views={el.social.views}
                shares={el.social.share}
                color="rgb(145, 158, 171)"
              />
            </Box>
          </NewBoxStyle>
        </GridItemStyle>
      ))}
      {/* end of rest of the array data */}
    </GridContainerStyle>
  );
};

export default Blogs;
