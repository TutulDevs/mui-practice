import { Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { Box } from "@mui/system";
import { GrFormClose } from "react-icons/gr";
import { MdClearAll } from "react-icons/md";
import DrawerContentBody from "./DrawerContentBody";

// container style
const ContainerStyle = styled(Box)(({ theme }) => ({
  width: 300,
  height: "calc(100vh - 14px)",
  display: "grid",
  gap: theme.spacing(1),
  gridTemplateRows: `${theme.mixins.toolbar.minHeight}px 1fr ${theme.mixins.toolbar.minHeight}px`,
}));

// toolbar
const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #eee",

  "& .MuiIconButton-root": {
    padding: theme.spacing(0.75),
  },
}));

// content
const ContentBoxStyle = styled(Box)(({ theme }) => ({
  //backgroundColor: "#f7f7f7",
  padding: "8px 20px",
  overflowY: "auto",

  // checkbox style
  "& .MuiCheckbox-root": {
    color: theme.palette.text.disabled,
  },
  "& .Mui-checked": {
    color: theme.palette.success.main,
  },
}));

const DrawerContent = ({ closeDrawer }) => {
  return (
    <ContainerStyle>
      {/* Header */}
      <ToolbarStyle>
        <Typography variant="h6" component="h4">
          Filters
        </Typography>

        <IconButton aria-label="close drawer" onClick={closeDrawer}>
          <GrFormClose />
        </IconButton>
      </ToolbarStyle>

      {/* Main Content */}
      <ContentBoxStyle>
        <DrawerContentBody />
      </ContentBoxStyle>

      {/* Footer */}
      <Toolbar>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<MdClearAll />}
          style={{
            padding: "10px 0",
            fontWeight: 500,
            textTransform: "capitalize",
          }}
          onClick={closeDrawer}
        >
          Clear All
        </Button>
      </Toolbar>
    </ContainerStyle>
  );
};

export default DrawerContent;
