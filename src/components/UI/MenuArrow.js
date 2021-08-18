import { StopSharp } from "@material-ui/icons";
import { styled } from "@material-ui/styles";

const Arrow = styled(StopSharp)(({ theme }) => ({
  top: `-${theme.spacing(2)}px`,
  right: theme.spacing(1.75),
  position: "absolute",
  transform: "rotate(45deg)",
  color: theme.palette.green.darker,
}));

const MenuArrow = () => <Arrow />;

export default MenuArrow;
