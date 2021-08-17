import {
  AppBar,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { Menu } from "@material-ui/icons";

import { drawerWidth } from "./Layout";

const AppBarStyle = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: `calc(100% - ${drawerWidth}px)`,
    flexShrink: 0,
  },
}));

const ToggleButtonStyle = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Header = (props) => {
  return (
    <AppBarStyle position='fixed'>
      <Toolbar>
        <ToggleButtonStyle
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={props.onClick}>
          <Menu />
        </ToggleButtonStyle>

        <Typography variant='h5' noWrap>
          Responsive drawer
        </Typography>
      </Toolbar>
    </AppBarStyle>
  );
};

export default Header;
