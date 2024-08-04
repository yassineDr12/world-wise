import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { FC, useState } from "react";
import AnimatedDiv from "./AnimatedDiv";
import TrackingListMenu from "./TrackingListMenu";

const TrackingList: FC = () => {
  const [menu, setMenu] = useState<"countries" | "cities">("cities");

  const handleAlignment = (_: React.MouseEvent<HTMLElement>, newMenu: "countries" | "cities") => {
    setMenu(newMenu);
  };

  return (
    <AnimatedDiv>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: 3,
        }}
      >
        <ToggleButtonGroup value={menu} exclusive onChange={handleAlignment}>
          <ToggleButton value="cities">
            <Typography variant="subtitle2">CITIES</Typography>
          </ToggleButton>
          <ToggleButton value="countries">
            <Typography variant="subtitle2">COUNTRIES</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
        <TrackingListMenu option={menu} />
      </Box>
    </AnimatedDiv>
  );
};

export default TrackingList;
