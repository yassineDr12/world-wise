import { useTheme } from "@emotion/react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "@emotion/styled";
import { Theme } from "@mui/material";

const Map = () => {
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

  return (
    <StyledMapContainer
      center={[51.505, -0.09]}
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
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </StyledMapContainer>
  );
};

export default Map;
