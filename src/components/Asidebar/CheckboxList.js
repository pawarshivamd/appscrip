import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
const categories = ["men", "women", "Baby & Kids"];
const CheckboxList = () => (
  <FormGroup>
    {categories.map((category, index) => (
      <FormControlLabel
        key={index}
        control={<Checkbox />}
        label={category}
        sx={{
          "& .MuiTypography-root": {
            textTransform: "capitalize",
            fontSize: "16px",
            fontWeight: 400,
          },
        }}
      />
    ))}
  </FormGroup>
);
export default CheckboxList;
