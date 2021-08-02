import { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/styles";
import EN_Flag from "../images/ic_flag_en.svg";
import DE_Flag from "../images/ic_flag_de.svg";
import FR_Flag from "../images/ic_flag_fr.svg";

const useStyles = makeStyles((theme) => ({
  header: {
    boxShadow: "none",
    backdropFilter: "blur(6px)",
    backgroundColor: "rgba(255, 255, 255, 0.72)",
    color: "#333333",
  },
  toolbar: {
    borderBottom: "2px solid blue",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "flex-start",
    alignItems: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
  searchIcon: {
    margin: theme.spacing(1),
    padding: theme.spacing(0.75),
  },
  buttonContainer: {},
  menuItem: {
    padding: "0.25rem 1.5rem",
  },
  menuImage: {
    marginRight: theme.spacing(2),
  },
}));

const MainHeader = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar position='fixed' className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <Box component='div'>
          <IconButton aria-label='Open Menu' className={classes.searchIcon}>
            <MenuIcon fontSize='small' />
          </IconButton>

          <IconButton aria-label='Search' className={classes.searchIcon}>
            <SearchIcon fontSize='small' />
          </IconButton>
        </Box>

        {/* Right side items */}
        <Box component='div'>
          <Box component='div'>
            <IconButton
              aria-controls='language-menu'
              aria-haspopup='true'
              onClick={handleClick}>
              <img src={EN_Flag} alt='EN Flag' />
            </IconButton>

            <Menu
              id='language-menu'
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <MenuItem className={classes.menuItem} onClick={handleClose}>
                <img
                  src={EN_Flag}
                  alt='EN Flag'
                  className={classes.menuImage}
                />
                <Typography variant='subtitle2' component='span'>
                  English
                </Typography>
              </MenuItem>
              <MenuItem className={classes.menuItem} onClick={handleClose}>
                <img
                  src={DE_Flag}
                  alt='DE Flag'
                  className={classes.menuImage}
                />
                <Typography variant='subtitle2' component='span'>
                  German
                </Typography>
              </MenuItem>
              <MenuItem className={classes.menuItem} onClick={handleClose}>
                <img
                  src={FR_Flag}
                  alt='FR Flag'
                  className={classes.menuImage}
                />
                <Typography variant='subtitle2' component='span'>
                  French
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
