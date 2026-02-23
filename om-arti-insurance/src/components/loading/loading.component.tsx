import { Box, Container, Grid, Skeleton, Stack } from "@mui/material";

export const Loading = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="space-around"
      alignItems="stretch"
      padding={{ xs: 2, sm: 3, md: 4 }}
    >
      <Grid item xs={10}>
        <Skeleton animation="wave" variant="rectangular" height={118} />
      </Grid>
      <Grid item xs={10}>
        <Skeleton animation="wave" variant="rectangular" height={118} />
      </Grid>{" "}
      <Grid item xs={10}>
        <Skeleton animation="wave" variant="rectangular" height={118} />
      </Grid>
      <Grid item xs={10}>
        <Skeleton animation="wave" variant="rectangular" height={118} />
      </Grid>
      <Grid item xs={10}>
        <Skeleton animation="wave" variant="rectangular" height={118} />
      </Grid>
    </Grid>
  );
};
