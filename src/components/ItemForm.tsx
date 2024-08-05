import { FC, FormEvent, useState } from "react";
import { IItemForm } from "../types/Components";
import { Button, TextField, Box, Typography, useTheme } from "@mui/material";
import AnimatedDiv from "./AnimatedDiv";
import { getCode } from "country-list";

const getCountryInitials = (countryName: string): string => {
  const code = getCode(countryName);
  return code ? code : countryName.substring(0, 2).toUpperCase();
};

const ItemForm: FC<IItemForm> = ({ selectedLocation, locationDetails, onSubmit, setAddItemFlag }) => {
  const theme = useTheme();
  const [notes, setNotes] = useState("");
  const [visitedOn, setVisitedOn] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: crypto.randomUUID(),
      country: locationDetails?.country || "Unknown",
      city: locationDetails?.city || "Unknown",
      initials: getCountryInitials(locationDetails?.country || "Unknown"),
      notes,
      visitedOn: new Date(visitedOn),
      wiki: `https://en.wikipedia.org/wiki/${locationDetails?.city},_${locationDetails?.country}`,
      lat: selectedLocation?.lat ?? 0,
      lng: selectedLocation?.lng ?? 0,
    });
    // Reset form fields
    setNotes("");
    setVisitedOn("");
  };

  return (
    <AnimatedDiv>
      <Box component="form" onSubmit={handleSubmit} sx={{ m: 3 }}>
        <Typography variant="h6" gutterBottom>
          Add New Location
        </Typography>
        <TextField fullWidth label="Country" value={locationDetails?.country || ""} margin="normal" disabled />
        <TextField fullWidth label="City" value={locationDetails?.city || ""} margin="normal" disabled />

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
