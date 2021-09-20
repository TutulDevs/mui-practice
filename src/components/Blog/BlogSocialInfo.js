import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";

// icon
import { FaCommentDots, FaEye, FaShare } from "react-icons/fa";

const BlogSocialInfo = ({ comments, views, shares, color }) => {
  return (
    <Typography
      variant="caption"
      style={{ color: color || "#f8f8f8", textAlign: "right" }}
    >
      <Box component="span" sx={{ px: 0.5 }}>
        <FaCommentDots /> {comments}
      </Box>
      <Box component="span" sx={{ px: 0.5 }}>
        <FaEye /> {views}
      </Box>
      <Box component="span" sx={{ px: 0.5 }}>
        <FaShare /> {shares}
      </Box>
    </Typography>
  );
};

export default BlogSocialInfo;
