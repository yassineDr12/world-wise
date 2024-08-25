import { useState, useEffect } from "react";
import Map from "../components/Map";
import { Grid, Paper, Grow, Button } from "@mui/material";
import TrackingList from "../components/TrackingList";
import Background from "../components/Background";
import useMapLocation from "../hooks/useMapLocation";
import { MapLocation, VisitedListItem } from "../types/Data";
import ItemForm from "../components/ItemForm";
import { useVisitedItems } from "../contexts/VisitedItemsContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Tracker = () => {
  const [showMap, setShowMap] = useState<boolean>(false);
  const { selectedLocation, setSelectedLocation, locationDetails } = useMapLocation();
  const { addVisitedItem } = useVisitedItems();
  const [addItemFlag, setAddItemFlag] = useState<boolean>(false);

  const onSubmit = (item: VisitedListItem) => {
    setAddItemFlag(false);
    addVisitedItem(item);
  };

  const handleLocate = () => {
    function success(position: { coords: { latitude: number; longitude: number } }) {
      const userLocation: MapLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setSelectedLocation(() => userLocation);
      setAddItemFlag(() => true);
    }

    function error() {
      console.log("Unable to retrieve your location");
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
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
      <Grow in={showMap} timeout={1000}>
        <Button
          variant="contained"
          startIcon={<LocationOnIcon />}
          onClick={handleLocate}
          style={{
            position: "absolute",
            bottom: "10%",
            left: "50%",
          }}
        >
          Locate Me
        </Button>
      </Grow>
    </Background>
  );
};

export default Tracker;
