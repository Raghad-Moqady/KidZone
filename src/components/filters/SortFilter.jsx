import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography
} from "@mui/material";


export default function SortFilter({
  sort,
  setSort
}) {

return (
<FormControl>

<Typography
fontSize={15}
fontWeight={600}
color="#8B5E3C"
>
Sort By
</Typography>


<RadioGroup
value={sort}
onChange={(e)=>setSort(e.target.value)}
>

<FormControlLabel
value="name"
control={
<Radio
sx={{
color:"#8B5E3C",
"&.Mui-checked":{
color:"#8B5E3C"
}
}}
/>
}
label={
<Typography fontSize={14}>
Name
</Typography>
}
/>


<FormControlLabel
value="price"
control={
<Radio
sx={{
color:"#8B5E3C",
"&.Mui-checked":{
color:"#8B5E3C"
}
}}
/>
}
label={
<Typography fontSize={14}>
Price
</Typography>
}
/>


</RadioGroup>

</FormControl>
)
}