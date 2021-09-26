import { Badge, Button } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { HiShoppingCart } from "react-icons/hi";

// style
const ButtonStyle = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: "14px 0px 8px 0px",
  border: `1px solid ${theme.palette.gray.light}`,
  borderRight: 0,
  borderRadius: `16px 0 0 16px`,
  boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 20px 40px -4px`,
  transition: "all 0.3s ease",

  position: "fixed",
  right: 0,
  top: `${theme.mixins.toolbar.minHeight * 2}px`,
  zIndex: 999,

  "&:hover": {
    boxShadow: "none",
    backgroundColor: "inherit",
    opacity: 0.75,
  },

  // badge
  "& .MuiBadge-badge": {
    backgroundColor: theme.palette.red.main,
    color: theme.palette.common.white,
    top: "-3px",
    fontSize: theme.spacing(1.75),
  },
}));

const FixedCartCounter = ({ itemAmout }) => {
  return (
    <ButtonStyle>
      <Badge badgeContent={itemAmout} color="primary">
        <HiShoppingCart fontSize="large" />
      </Badge>
    </ButtonStyle>
  );
};

export default FixedCartCounter;
