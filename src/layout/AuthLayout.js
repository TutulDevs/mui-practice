import { Box } from "@mui/system";

const AuthLayout = (props) => {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        minHeight: "100vh",
        p: 3,
        bgcolor: "#ccc",
      }}
    >
      {props.children}
    </Box>
  );
};

export default AuthLayout;
