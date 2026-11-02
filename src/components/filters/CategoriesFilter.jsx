import React from "react";
import useCategories from "../../hooks/useCategories.js";
import {
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";

export default function CategoriesFilter({
  selectedCategories,
  setSelectedCategories,
}) {
  const { data } = useCategories();

  const handleChange = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <Stack spacing={0.5}>
      <Typography
        fontSize={15}
        fontWeight={600}
        color="#8B5E3C"
      >
        Categories
      </Typography>

      {data?.map((category) => (
        <FormControlLabel
          key={category?.id}
          control={
            <Checkbox
              checked={selectedCategories?.includes(category?.id)}
              onChange={() => handleChange(category?.id)}
              sx={{
                color: "#8B5E3C",
                "&.Mui-checked": {
                  color: "#8B5E3C",
                },
              }}
            />
          }
          label={
            <Typography fontSize={14}>
              {category?.name}
            </Typography>
          }
        />
      ))}
    </Stack>
  );
}