import { Box, CssBaseline, Typography } from "@mui/material";
import React from "react";
import Menu from "./Menu";

function Base({ title, children }) {
  return (
    <Box>
      <CssBaseline />
      <Menu />
      <Box
        sx={{
          width: "100%",
          backgroundColor: "lightcoral",
          padding: "40px",
          height: "50vh",
        }}
      >
        <Typography variant="h3">{title}</Typography>
        <Typography
          variant="subtitle1"
          sx={{ width: "60%", textAlign: "justify-content" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Typography>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}

export default Base;
