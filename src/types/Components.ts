import { LocationDetails, MapLocation, VisitedListItem } from "./VisitedListItem";

export interface IMap {
  selectedLocation: MapLocation | null;
  setSelectedLocation: React.Dispatch<React.SetStateAction<MapLocation | null>>;
  locationDetails: LocationDetails | null;
}

export interface ITrackingList {
  selectedLocation: MapLocation | null;
  setSelectedLocation: React.Dispatch<React.SetStateAction<MapLocation | null>>;
}

export interface ITrackingListMenu {
  selectedItem: VisitedListItem;
  setSelectedItem: React.Dispatch<React.SetStateAction<MapLocation | null>>;
  option: "cities" | "countries";
}
