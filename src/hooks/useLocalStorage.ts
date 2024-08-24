import { useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T[]) {
  // Get from local storage then
  // parse stored json or return initialValue
  const retreiveItems = (): T[] => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const items = window.localStorage.getItem(key);
      return items ? JSON.parse(items) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  };

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedItems, setStoredItems] = useState<T[]>(() => retreiveItems());

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const addItem = (itemToAdd: T) => {
    try {
      // Save to local storage
      if (typeof window !== "undefined") {
        // Save state
        setStoredItems((prevItems) => [...prevItems, itemToAdd]);
        window.localStorage.setItem(key, JSON.stringify([...storedItems, itemToAdd]));
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  };

  const removeItem = (itemToRemove: T) => {
    try {
      // Save to local storage
      if (typeof window !== "undefined") {
        // Save state
        setStoredItems((prevItems) => prevItems.filter((item) => item !== itemToRemove));
        window.localStorage.setItem(key, JSON.stringify(storedItems.filter((item) => item !== itemToRemove)));
      }
    } catch (error) {
      console.warn(`Error removing item from localStorage key "${key}":`, error);
    }
  };

  return [storedItems, addItem, removeItem] as [T[], (itemToAdd: T) => void, (itemToRemove: T) => void];
}

export default useLocalStorage;
