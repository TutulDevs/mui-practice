import { Button, IconButton, InputAdornment } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

// style
const FormStyle = styled("form")(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "grid",
  gap: theme.spacing(3),

  "& label.Mui-focused": {
    color: theme.palette.success.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.success.main,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.success.main,
    },
  },

  "& .MuiIconButton-label": {
    color: theme.palette.success.main,
  },

  "& .MuiButton-contained": {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    fontWeight: 600,
    textTransform: "capitalize",
    padding: theme.spacing(1.25),
    boxShadow: `rgb(0 171 85 / 24%) 0px 8px 16px 0px`,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
      boxShadow: "none",
    },
  },
}));

const FormRegister = () => {
  const [showPassword, setShowPassord] = useState(false);

  const handleTogglePassword = () => setShowPassord(!showPassword);

  // submit
  const handleSubmit = () => console.log("Registered...");

  return (
    <FormStyle component="form" noValidate onSubmit={handleSubmit}>
      {/* Names box */}
      <Box
        sx={{
          display: "grid",
          gap: { xs: 3, sm: 2 },
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        }}
      >
        <TextField
          variant="outlined"
          fullWidth
          type="text"
          label="First Name"
        />

        <TextField variant="outlined" fullWidth type="text" label="Last Name" />
      </Box>

      <TextField
        variant="outlined"
        fullWidth
        type="email"
        label="Email address"
      />

      <TextField
        variant="outlined"
        fullWidth
        type={showPassword ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={handleTogglePassword}>
                {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Password"
      />

      <Button variant="contained" disableElevation>
        Register
      </Button>
    </FormStyle>
  );
};

export default FormRegister;
