import {
  Box,
  List,
  ListItem,
  ListItemText,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
  IconButton,
  Card,
  CardContent,
  Link,
} from "@mui/material";
import { useState } from "react";
import AnimatedDiv from "./AnimatedDiv";
import CloseIcon from "@mui/icons-material/Close";

const cities = [
  { name: "New York", date: "2023-05-15" },
  { name: "Paris", date: "2023-07-22" },
  { name: "London", date: "2023-09-10" },
  { name: "Berlin", date: "2023-10-15" },
  { name: "Madrid", date: "2023-11-22" },
  { name: "Rome", date: "2023-12-25" },
  { name: "Munich", date: "2023-12-31" },
  { name: "Barcelona", date: "2024-01-15" },
];
const countries = [
  { name: "USA", date: "2023-05-15" },
  { name: "France", date: "2023-07-22" },
  { name: "UK", date: "2023-09-10" },
];

const Menu = ({ option }: { option: "cities" | "countries" }) => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const items = option === "cities" ? cities : countries;

  const handleItemClick = (name: string) => {
    setSelectedItem(name);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("");
  };

  return (
    <Box m={3} width="100%">
      <List
        sx={{
          height: "400px",
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
        {items.map((item) => (
          <ListItem
            key={item.name}
            onClick={() => handleItemClick(item.name)}
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
                    {getInitials(item.name)}
                  </Box>
                  {item.name}
                </Typography>
              }
            />
            <Typography variant="body2">{item.date}</Typography>
            <IconButton size="small" sx={{ color: theme.palette.primary.contrastText }}>
              <CloseIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      {selectedItem && (
        <AnimatedDiv>
          <Card sx={{ mt: 2, backgroundColor: "primary.main", color: "primary.contrastText" }}>
            <CardContent>
              <Typography variant="h6">{selectedItem}</Typography>
              <Typography variant="body2">
                You went to {selectedItem} on {items.find((item) => item.name === selectedItem)?.date}
              </Typography>
              <Typography variant="body2" mt={1}>
                Your notes
              </Typography>
              <Link href={`https://en.wikipedia.org/wiki/${selectedItem}`} target="_blank" rel="noopener">
                <Typography variant="body2" sx={{ color: "white", textDecoration: "underline" }} mt={2}>
                  Check out {selectedItem} on Wikipedia
                </Typography>
              </Link>
            </CardContent>
          </Card>
        </AnimatedDiv>
      )}
    </Box>
  );
};

const TrackingList = () => {
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
        <Menu option={menu} />
      </Box>
    </AnimatedDiv>
  );
};

export default TrackingList;
