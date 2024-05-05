import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import CheckboxList from "./CheckboxList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComponent = ({ title, subtitle }) => {
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        my: 2,
        boxShadow: "none",
        borderTop: "1px solid #E5E5E5",
        borderBottom: "1px solid #E5E5E5",
        paddingInline: "0",
        "&:before": {
          display: "none",
        },
      }}
    >
      <AccordionSummary
        sx={{
          paddingInline: "0",
          alignItems: "baseline",
          my: 1,
        }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 700,
              mb: 1,
              textTransform: "uppercase",
            }}
          >
            {title}
          </Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: 400 }}>
            {subtitle}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          pt: 0,
          paddingInline: "0",
        }}
      >
        <CheckboxList />
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
