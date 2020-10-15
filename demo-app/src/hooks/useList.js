import { useState } from "react";

export const useList = (initialItems) => {
  const [items, setItems] = useState(initialItems);

  const appendItem = (item) => {
    setItems([
      ...items,
      {
        ...item,
        id: Math.max(...items.map((c) => c.id), 0) + 1,
      },
    ]);
  };

  const replaceItem = (item) => {
    const itemIndex = items.findIndex((c) => c.id === item.id);
    const newItems = [...items];
    newItems[itemIndex] = item;
    setItems(newItems);
  };

  const removeItem = (itemId) => {
    setItems(items.filter((i) => i.id !== itemId));
  };

  return [items, appendItem, replaceItem, removeItem];
};
