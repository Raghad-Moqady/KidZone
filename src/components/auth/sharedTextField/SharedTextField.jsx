import { TextField } from "@mui/material";
import React from "react";

export default function SharedTextField({type,label,error,register}) {
  return (
    <>
      <TextField
        color="none"
        type={type}
        label={label}
        {...register}
        variant="outlined"
        fullWidth
        sx={{
          "& fieldset": { borderRadius: "50px" },
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px",
            overflow: "hidden",
          },
          "& .MuiInputLabel-root": {
            color: "#5c3b22",
          },
        }}
        error={error}
        helperText={error?.message}
      />
    </>
  );
}
