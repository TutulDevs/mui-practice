import { Container } from "@material-ui/core";
import { Box } from "@mui/system";
import UserHeader from "../components/User/UserHeader";
import UserTable from "../components/User/UserTable";

const User = () => {
  return (
    <Container maxWidth="lg">
      {/* User Header */}
      <UserHeader />

      {/* User Table */}
      <Box
        sx={{
          width: "100%",
          borderRadius: 4,
          boxShadow: `rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px`,
        }}
      >
        <UserTable />
      </Box>
    </Container>
  );
};

export default User;
