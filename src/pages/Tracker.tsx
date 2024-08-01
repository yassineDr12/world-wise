import Map from "../components/Map";
import { Grid, Paper } from "@mui/material";
import TrackingList from "../components/TrackingList";

const Tracker = () => {
  return (
    <Paper elevation={3} sx={{ m: 3 }}>
      <Grid container>
        <Grid item xs={12} md={5}>
          <TrackingList />
        </Grid>
        <Grid item xs={12} md={7}>
          <Map />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Tracker;
