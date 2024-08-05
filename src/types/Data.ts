export type MapLocation = {
  lat: number;
  lng: number;
};

export type VisitedListItem = MapLocation & {
  id: string;
  country: string;
  city: string;
  initials: string;
  notes: string;
  visitedOn: Date;
  wiki: string;
};

export type LocationDetails = {
  country: string;
  city: string;
};
