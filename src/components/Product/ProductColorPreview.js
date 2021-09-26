import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";

// style
const WrapperStyle = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
}));

const DotStyle = styled(Box)(({ theme }) => ({
  marginLeft: "-4px",
  width: theme.spacing(2),
  height: theme.spacing(2),
  border: `2px solid ${theme.palette.common.white}`,
  borderRadius: "50%",
  boxShadow: `inset -1px 1px 2px  rgba(0,0,0,0.25)`,
}));

const ProductColorPreview = ({ colors, limit }) => {
  const showColors = colors.slice(0, limit);
  const moreColors = colors.length - limit;

  return (
    <WrapperStyle>
      {/* Dots */}
      {showColors.map((color, idx) => (
        <DotStyle key={color + idx} sx={{ bgcolor: color }} />
      ))}

      {colors.length > limit && (
        <Typography variant="body1">+{moreColors}</Typography>
      )}
    </WrapperStyle>
  );
};

export default ProductColorPreview;
