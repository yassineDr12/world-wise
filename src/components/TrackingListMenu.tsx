import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AnimatedDiv from "./AnimatedDiv";
import { FC, useEffect, useState } from "react";
import { VisitedListItem } from "../types/Data";
import { ITrackingListMenu } from "../types/Components";
import { keyframes } from "@mui/system";

// ... (rest of the imports)

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const NoItemsMessage = () => (
  <Box display="flex" flexDirection="column" alignItems="center" mt={30} sx={{ animation: `${pulse} 2s infinite` }}>
    <Typography variant="h5" mt={2} fontWeight="bold" color="primary">
      Your adventure awaits!
    </Typography>
    <Typography variant="body1" mt={1} color="text.secondary" textAlign="center">
      Start selecting places on the map to see them here.
    </Typography>
  </Box>
);

const renderCitiesList = ({
  theme,
  visitedItems,
  handleItemClick,
}: {
  theme: Theme;
  visitedItems: VisitedListItem[];
  handleItemClick: (item: VisitedListItem) => void;
}) => {
  return (
    <>
      {visitedItems.map((item: VisitedListItem) => (
        <ListItem
          key={item.city}
          onClick={() => handleItemClick(item)}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            mb: 1,
            borderRadius: 1,
            cursor: "pointer",
          }}
        >
          <ListItemText
            primary={
              <Typography>
                <Box component="span" fontWeight="bold" mr={1}>
                  {item.initials}
                </Box>
                {item.city}
              </Typography>
            }
          />
          <Typography variant="body2">{new Date(item.visitedOn).toDateString()}</Typography>
          <IconButton size="small" sx={{ color: theme.palette.primary.contrastText }}>
            <CloseIcon />
          </IconButton>
        </ListItem>
      ))}
    </>
  );
};

const renderCountriesList = ({ theme, visitedItems }: { theme: Theme; visitedItems: VisitedListItem[] }) => {
  const uniqueCountries = Array.from(new Set(visitedItems.map((item) => item.country))).map(
    (country) => visitedItems.find((item) => item.country === country)!
  );

  return (
    <Grid container spacing={2}>
      {uniqueCountries.map((item: VisitedListItem) => (
        <Grid item xs={6} key={item.country}>
          <Card
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              {item.initials}
            </Typography>
            <Typography variant="body2" textAlign="center">
              {item.country}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const TrackingListMenu: FC<ITrackingListMenu> = ({ option, visitedItems, setSelectedLocation }) => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState<VisitedListItem | null>(null);

  useEffect(() => {
    option === "countries" && setSelectedItem(null);
  }, [option]);

  useEffect(() => {
    selectedItem && setSelectedLocation({ lat: selectedItem.lat, lng: selectedItem.lng });
  }, [selectedItem, setSelectedLocation]);

  const handleItemClick = (item: VisitedListItem) => {
    setSelectedItem(item);
  };

  const menu = () => {
    return (
      <>
        <List
          sx={{
            height: option === "countries" ? "585px" : "415px",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.primary.main,
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "transparent",
            },
            scrollbarWidth: "thin",
            scrollbarColor: `${theme.palette.primary.main} transparent`,
          }}
        >
          {option === "cities"
            ? renderCitiesList({ visitedItems, theme, handleItemClick })
            : renderCountriesList({ visitedItems, theme })}
        </List>
        {selectedItem && (
          <AnimatedDiv>
            <Card sx={{ mt: 2, backgroundColor: "primary.main", color: "primary.contrastText" }}>
              <CardContent>
                <Typography variant="h6">{selectedItem.city}</Typography>
                <Typography variant="body2">
                  You went to {selectedItem.city} on {new Date(selectedItem.visitedOn).toDateString()}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {selectedItem.notes}
                </Typography>
                <Link href={selectedItem.wiki} target="_blank" rel="noopener">
                  <Typography
                    variant="body2"
                    sx={{ color: "primary.contrastText", textDecoration: "underline" }}
                    mt={2}
                  >
                    Check out {selectedItem.city} on Wikipedia
                  </Typography>
                </Link>
              </CardContent>
            </Card>
          </AnimatedDiv>
        )}
      </>
    );
  };

  return (
    <Box m={3} width="100%">
      {visitedItems.length === 0 ? <NoItemsMessage /> : menu()}
    </Box>
  );
};

export default TrackingListMenu;
