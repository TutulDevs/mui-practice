import { Button, IconButton, InputAdornment } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

// style
const FormStyle = styled("form")(({ theme }) => ({
  // root style
  marginTop: theme.spacing(2),
  display: "grid",
  gap: theme.spacing(3),

  // input style
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

  // error
  "& .Mui-error.MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.error.light,
    },
  },
  "& label.Mui-error.Mui-focused": {
    color: theme.palette.error.light,
  },

  // Button style
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

  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  // submit
  const onSubmit = (data) => {
    console.table(data);
    alert("userData: " + JSON.stringify(data));
  };

  return (
    <FormStyle component="form" onSubmit={handleSubmit(onSubmit)}>
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
          {...register("firstName", { required: true })}
          error={errors.firstName ? true : false}
          helperText={errors.firstName && "Enter a valid first name"}
        />

        <TextField
          variant="outlined"
          fullWidth
          type="text"
          label="Last Name"
          {...register("lastName", { required: true })}
          error={errors.lastName ? true : false}
          helperText={errors.lastName && "Enter a valid last name"}
        />
      </Box>

      {/* email */}
      <TextField
        variant="outlined"
        fullWidth
        type="email"
        label="Email address"
        {...register("email", { required: true })}
        error={errors.email ? true : false}
        helperText={errors.email && "Enter a valid email address"}
      />

      {/* password */}
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
        {...register("password", {
          required: true,
          minLength: 5,
          maxLength: 15,
        })}
        error={errors.password ? true : false}
        helperText={
          errors.password && "Enter a valid password (5-15 characters)"
        }
      />

      {/* submit */}
      <Button type="submit" variant="contained" disableElevation>
        Register
      </Button>
    </FormStyle>
  );
};

export default FormRegister;
