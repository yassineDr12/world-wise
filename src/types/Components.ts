import { LocationDetails, MapLocation, VisitedListItem } from "./Data";

export interface IMap {
  selectedLocation: MapLocation | null;
  locationDetails: LocationDetails | null;
  setAddItemFlag: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedLocation: React.Dispatch<React.SetStateAction<MapLocation | null>>;
}

export interface ITrackingList {
  setSelectedLocation: React.Dispatch<React.SetStateAction<MapLocation | null>>;
}

export interface ITrackingListMenu {
  option: "cities" | "countries";
  visitedItems: VisitedListItem[];
  setSelectedLocation: React.Dispatch<React.SetStateAction<MapLocation | null>>;
}

export interface IItemForm {
  selectedLocation: MapLocation | null;
  locationDetails: LocationDetails | null;
  setAddItemFlag: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (item: VisitedListItem) => void;
}
