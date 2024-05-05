import {
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import AccordionComponent from "./AccordionComponent";
// const categories = ["men", "women", "Baby & Kids"];
const accordionDetails = [
  { title: "IDEAL FOR", subtitle: "All" },
  { title: "occasion", subtitle: "All" },
  { title: "work", subtitle: "All" },
  { title: "fabric", subtitle: "All" },
];
const AsiderSection = () => {
  return (
    <aside>
        <FormGroup>
          <FormControlLabel
            sx={{
              "& .MuiTypography-root": {
                textTransform: "uppercase",
                fontSize: "18px",
                fontWeight: 700,
              },
            }}
            control={<Checkbox />}
            label="Customizble"
          />
        </FormGroup>
        {accordionDetails.map((accordion, index) => (
          <AccordionComponent
            key={index}
            title={accordion.title}
            subtitle={accordion.subtitle}
          />
        ))}
    </aside>
  );
};

export default AsiderSection;
