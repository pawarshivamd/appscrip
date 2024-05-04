import { Box, Typography } from "@mui/material";
import React from "react";

const NewProductInfo = () => {
  return (
    <Box sx={{ position: "absolute", top: "2%", left: "5%" }}>
      <Typography
        sx={{
          textTransform: "capitalize",
          fontWeight: 700,
          fontSize: "0.875rem",
        }}
      >
        new product
      </Typography>
    </Box>
  );
};

export default NewProductInfo;
