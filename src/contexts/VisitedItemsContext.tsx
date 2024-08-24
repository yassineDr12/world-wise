import { createContext, FC, ReactNode, useContext } from "react";
import { VisitedListItem } from "../types/Data";
import useLocalStorage from "../hooks/useLocalStorage";

type VisitedItemsContextType =
  | {
      visitedItems: VisitedListItem[];
      addVisitedItem: (itemToAdd: VisitedListItem) => void;
      removeVisitedItem: (itemToRemove: VisitedListItem) => void;
    }
  | undefined;

const VisitedItemsContext = createContext<VisitedItemsContextType>(undefined);

const VisitedItemsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [visitedItems, addVisitedItem, removeVisitedItem] = useLocalStorage<VisitedListItem>("visitedItems", []);

  return (
    <VisitedItemsContext.Provider value={{ visitedItems, addVisitedItem, removeVisitedItem }}>
      {children}
    </VisitedItemsContext.Provider>
  );
};

const useVisitedItems = () => {
  const context = useContext(VisitedItemsContext);
  if (context === undefined) throw new Error("useVisitedItems must be used within VisitedItemsProvider");
  return context;
};

export { VisitedItemsProvider, useVisitedItems };
