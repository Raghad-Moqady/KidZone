import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Typography } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import AccordionUsage from "../accordionUsage/AccordionUsage";
import CategoriesFilter from "../filters/CategoriesFilter.jsx";
import PriceFilter from "../filters/PriceFilter.jsx";
import RatingFilter from "../filters/RatingFilter.jsx";
import SortFilter from "../filters/SortFilter.jsx";

export default function FilterDrower({ buttonName, buttonIcon }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const accordionContent = {
    Categories: <CategoriesFilter />,
    Price: <PriceFilter />,
    Ratings: <RatingFilter />,
    "Sorted By": <SortFilter />,
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(true)}>
      <List>
        {["Categories", "Price", "Ratings", "Sorted By"].map((text) => (
          <AccordionUsage title={text} key={text}>
            {accordionContent[text]}
          </AccordionUsage>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button
        startIcon={<TuneIcon />}
        onClick={toggleDrawer(true)}
        sx={{
          backgroundColor: "#E47221",
          color: "white",
          paddingX: 4,
          paddingY: 1,
          fontWeight: "bold",
        }}
      >
        FILTER BY
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Typography
          variant="h5"
          component={"h2"}
          sx={{
            textAlign: "center",
            color: "#8B5E3C",
            paddingTop: 4,
            paddingBottom: 2,
            fontWeight: "bold",
          }}
        >
          <TuneIcon color="#8B5E3C" /> FILTER BY
        </Typography>
        <Divider />
        {DrawerList}
      </Drawer>
    </div>
  );
}
