import useLocalStorage from "./useLocalStorage";

const useTrackedList = () => {
  const [visitedItems, addItem] = useLocalStorage("visitedItems", []);

  return {
    visitedItems,
    addItem,
  };
};

export default useTrackedList;
