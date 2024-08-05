import { useState, useEffect } from "react";
import Map from "../components/Map";
import { Grid, Paper, Grow } from "@mui/material";
import TrackingList from "../components/TrackingList";
import Background from "../components/Background";
import useMapLocation from "../hooks/useMapLocation";
import { VisitedListItem } from "../types/Data";
import ItemForm from "../components/ItemForm";

const Tracker = () => {
  const [showMap, setShowMap] = useState<boolean>(false);
  const { selectedLocation, setSelectedLocation, locationDetails } = useMapLocation();
  const [addItemFlag, setAddItemFlag] = useState<boolean>(false);

  const onSubmit = (item: VisitedListItem) => {
    setAddItemFlag(false);
    console.log(item);
  };

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
            {addItemFlag ? (
              <ItemForm
                selectedLocation={selectedLocation}
                locationDetails={locationDetails}
                onSubmit={onSubmit}
                setAddItemFlag={setAddItemFlag}
              />
            ) : (
              <TrackingList setSelectedLocation={setSelectedLocation} />
            )}
          </Grid>
          <Grow in={showMap} timeout={1000}>
            <Grid item xs={12} md={7}>
              <Map
                selectedLocation={selectedLocation}
                locationDetails={locationDetails}
                setAddItemFlag={setAddItemFlag}
                setSelectedLocation={setSelectedLocation}
              />
            </Grid>
          </Grow>
        </Grid>
      </Paper>
    </Background>
  );
};

export default Tracker;
