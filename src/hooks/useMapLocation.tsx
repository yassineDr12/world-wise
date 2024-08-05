import axios from "axios";
import { useEffect, useState } from "react";
import { LocationDetails, MapLocation } from "../types/Data";

const useMapLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [locationDetails, setLocationDetails] = useState<LocationDetails | null>(null);

  useEffect(() => {
    if (selectedLocation) {
      const { lat, lng } = selectedLocation;
      const fetchLocationDetails = async () => {
        try {
          const response = await axios.get(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
          );
          setLocationDetails({
            city: response.data.city || response.data.locality || "Unknown city",
            country: response.data.countryName || "Unknown country",
          });
        } catch (error) {
          console.error("Error fetching location details:", error);
          setLocationDetails(null);
        }
      };

      fetchLocationDetails();
    }
  }, [selectedLocation]);

  return {
    selectedLocation,
    setSelectedLocation,
    locationDetails,
  };
};

export default useMapLocation;
