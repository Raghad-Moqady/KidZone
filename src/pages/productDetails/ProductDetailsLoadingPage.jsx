import { Box, Skeleton, Card, Grid } from "@mui/material";
import Item from "@mui/material/Grid";

export default function ProductDetailsLoadingPage() {
  return (
    <Box
      sx={{ pt: "24px", pl: "32px", pr: "32px", pb: "72px" }}
      bgcolor="#FFF8F1"
    >
      <Skeleton variant="text" width={"50%"} sx={{ fontSize: "2rem" }} />
      <Card
        sx={{
          mt: "15px",
          mb: "32px",
          boxShadow: "0px 1px 6px -1px rgba(0, 0, 0, 0.1)",
          p: "40px 40px 40px 40px",
          borderRadius: "10px",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={6}>
            <Item>
              {/* main Img */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Skeleton variant="rectangular" width={"90%"} height={500} />
              </Box>

              {/* sub Imgs */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                {Array.from({ length: 3 }).map((_, index) => (
                  <Card
                    key={index}
                    sx={{
                      boxShadow: "none",
                      backgroundColor: "inherit",
                      position: "relative",
                      mr: 2,
                    }}
                  >
                    <Skeleton variant="rectangular" width={100} height={100} />
                  </Card>
                ))}
              </Box>
            </Item>
          </Grid>
          <Grid size={6}>
            <Item sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", width: "20%" }}
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "3rem", width: "40%" }}
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "2rem", width: "50%" }}
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "2rem", width: "60%" }}
              />
              <Skeleton variant="rectangular" width={"100%"} height={150} />

              <Box sx={{ display: "flex", mt: "26px", gap: 2 }}>
                {/* Quantity */}
                <Skeleton variant="rectangular" width={"90%"} height={50} />

                {/* Add to cart Button  */}
                <Skeleton variant="rectangular" width={"90%"} height={50} />
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
