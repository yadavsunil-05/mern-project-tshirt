import React, { useState } from "react";
import Base from "../core/Base";
import { CssBaseline, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

function Signup() {
  return (
    <Base title={"Sign Up Page"}>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#343a40'
        }}
      >
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            height: "60vh",
            border: "2px solid lightcoral",
            padding: '20px',
            backgroundColor: '#fff',
            borderRadius: '10px'
          }}
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            required
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            required
            sx={{ marginBottom: '20px' }}
          />
          <Button variant="contained">Submit</Button>
        </Box>
      </Box>
    </Base>
  );
}

export default Signup;
