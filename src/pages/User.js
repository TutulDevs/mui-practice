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
          border: "1px solid",
          borderRadius: 2,
        }}
      >
        <UserTable />
      </Box>
    </Container>
  );
};

export default User;
