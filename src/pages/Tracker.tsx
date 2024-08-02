import { useState, useEffect } from "react";
import Map from "../components/Map";
import { Grid, Paper, Grow } from "@mui/material";
import TrackingList from "../components/TrackingList";
import Background from "../components/Background";

const Tracker = () => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMap(true), 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Background sx={{ p: 3 }}>
      <Paper elevation={3} sx={{ backgroundColor: "background.default" }}>
        <Grid container>
          <Grid item xs={12} md={5}>
            <TrackingList />
          </Grid>
          <Grow in={showMap} timeout={1000}>
            <Grid item xs={12} md={7}>
              <Map />
            </Grid>
          </Grow>
        </Grid>
      </Paper>
    </Background>
  );
};

export default Tracker;
