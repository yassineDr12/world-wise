import { FC, FormEvent, useState } from "react";
import { IItemForm } from "../types/Components";
import { Button, TextField, Box, Typography, useTheme } from "@mui/material";
import AnimatedDiv from "./AnimatedDiv";

const ItemForm: FC<IItemForm> = ({ selectedLocation, locationDetails, onSubmit, setAddItemFlag }) => {
  const theme = useTheme();
  const [country, setCountry] = useState(locationDetails?.country || "");
  const [city, setCity] = useState(locationDetails?.city || "");
  const [notes, setNotes] = useState("");
  const [visitedOn, setVisitedOn] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: crypto.randomUUID(),
      country: locationDetails?.country || country,
      city: locationDetails?.country || city,
      countryInitials: country.slice(0, 2).toUpperCase(),
      cityIitials: city.slice(0, 2).toUpperCase(),
      notes,
      visitedOn: new Date(visitedOn),
      wiki: `https://en.wikipedia.org/wiki/${city},_${country}`,
      lat: selectedLocation?.lat ?? 0,
      lng: selectedLocation?.lng ?? 0,
    });
    // Reset form fields
    setCountry("");
    setCity("");
    setNotes("");
    setVisitedOn("");
  };

  return (
    <AnimatedDiv>
      <Box component="form" onSubmit={handleSubmit} sx={{ m: 3 }}>
        <Typography variant="h6" gutterBottom>
          Add New Location
        </Typography>
        <TextField
          fullWidth
          label="Country"
          value={locationDetails?.country}
          onChange={(e) => setCountry(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="City"
          value={locationDetails?.city}
          onChange={(e) => setCity(e.target.value)}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Date Visited"
          type="date"
          value={visitedOn}
          onChange={(e) => setVisitedOn(e.target.value)}
          margin="normal"
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          sx={{
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
          fullWidth
          label="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          margin="normal"
          multiline
          rows={12}
        />
        <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Button type="submit" variant="contained" color="primary">
            Add to list
          </Button>
          <Button variant="outlined" onClick={() => setAddItemFlag(false)}>
            Cancel
          </Button>
        </Box>
      </Box>
    </AnimatedDiv>
  );
};

export default ItemForm;
