import { Box, Typography } from "@mui/material";
import React from "react";

const OutOfStockInfo = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: 0,
        right: 0,
        background: "#FFF",
        py: 3,
      }}
    >
      <Typography
        sx={{
          textTransform: "capitalize",
          fontWeight: 700,
          fontSize: "1.25rem",
          textAlign: "center",
        }}
      >
        out of stock
      </Typography>
    </Box>
  );
};

export default OutOfStockInfo;
