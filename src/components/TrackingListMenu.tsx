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
import { useEffect, useState } from "react";
import { visitedItems } from "../data/visitedList";
import { VisitedListItem } from "../types/VisitedListItem";

const renderCitiesList = ({
  handleItemClick,
  theme,
}: {
  handleItemClick: (item: VisitedListItem) => void;
  theme: Theme;
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
                  {item.cityIitials}
                </Box>
                {item.city}
              </Typography>
            }
          />
          <Typography variant="body2">{item.visitedOn.toDateString()}</Typography>
          <IconButton size="small" sx={{ color: theme.palette.primary.contrastText }}>
            <CloseIcon />
          </IconButton>
        </ListItem>
      ))}
    </>
  );
};

const renderCountriesList = ({ theme }: { theme: Theme }) => {
  return (
    <Grid container spacing={2}>
      {visitedItems.map((item: VisitedListItem) => (
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
              {item.countryInitials}
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

const TrackingListMenu = ({ option }: { option: "countries" | "cities" }) => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState<VisitedListItem | null>(null);

  useEffect(() => {
    option === "countries" && setSelectedItem(null);
  }, [option]);

  const handleItemClick = (item: VisitedListItem) => {
    setSelectedItem(item);
  };

  return (
    <Box m={3} width="100%">
      <List
        sx={{
          height: option === "countries" ? "585px" : "400px",
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
        {option === "cities" ? renderCitiesList({ handleItemClick, theme }) : renderCountriesList({ theme })}
      </List>
      {selectedItem && (
        <AnimatedDiv>
          <Card sx={{ mt: 2, backgroundColor: "primary.main", color: "primary.contrastText" }}>
            <CardContent>
              <Typography variant="h6">{selectedItem.city}</Typography>
              <Typography variant="body2">
                You went to {selectedItem.city} on {selectedItem.visitedOn.toDateString()}
              </Typography>
              <Typography variant="body2" mt={1}>
                {selectedItem.notes}
              </Typography>
              <Link href={selectedItem.wiki} target="_blank" rel="noopener">
                <Typography variant="body2" sx={{ color: "white", textDecoration: "underline" }} mt={2}>
                  Check out {selectedItem.city} on Wikipedia
                </Typography>
              </Link>
            </CardContent>
          </Card>
        </AnimatedDiv>
      )}
    </Box>
  );
};

export default TrackingListMenu;
