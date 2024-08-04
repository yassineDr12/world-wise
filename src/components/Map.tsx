import { useTheme } from "@emotion/react";
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import styled from "@emotion/styled";
import { Theme } from "@mui/material";
import useMapLocation from "../hooks/useMapLocation";
import { FC } from "react";

const Map: FC = () => {
  const theme = useTheme() as Theme;
  const primaryColor = theme.palette.primary.main;
  const zoomControlStyle = {
    ".leaflet-control-zoom a": {
      backgroundColor: primaryColor,
      color: "white",
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  };
  const StyledMapContainer = styled(MapContainer)`
    ${zoomControlStyle}
  `;
  const { selectedLocation, setSelectedLocation, locationDetails } = useMapLocation();

  function MapEvents() {
    useMapEvents({
      click(e) {
        setSelectedLocation(e.latlng);
      },
    });
    return null;
  }

  return (
    <StyledMapContainer
      center={selectedLocation || [51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      style={{
        height: "80vh",
        width: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapEvents />
      {selectedLocation && (
        <Marker position={selectedLocation}>
          <Popup>
            {locationDetails ? (
              <>
                <strong>
                  {locationDetails.city}, {locationDetails.country}
                </strong>
                <br />
                Lat: {selectedLocation.lat.toFixed(4)}, Lng: {selectedLocation.lng.toFixed(4)}
              </>
            ) : (
              "Loading location details..."
            )}
          </Popup>
        </Marker>
      )}
    </StyledMapContainer>
  );
};

export default Map;
