import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function AccordionUsage({ title, children }) {
  const id = React.useId();
  return (
    <Accordion>
      <AccordionSummary
        sx={{ color: "#8B5E3C" }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}-panel1-content`}
        id={`${id}-panel1-header`}
      >
        <Typography component="span">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
         {children}
      </AccordionDetails>
    </Accordion>
  );
}
