import { useState, useDebugValue } from "react";

import { useList } from "./useList";

export function useColorTool() {
  const [colors, appendColor, replaceColor] = useList([]);

  const [editColorId, setEditColorId] = useState(-1);

  useDebugValue("colors: " + JSON.stringify(colors));

  const [showArchive, setShowArchive] = useState(false);

  useDebugValue("showArchive: " + showArchive);

  const addColor = (color) => {
    appendColor({
      ...color,
      archive: false,
    });
  };

  const saveColor = (color) => {
    replaceColor(color);
    setEditColorId(-1);
  };

  const cancelColor = () => setEditColorId(-1);

  const archiveColor = (colorId) => {
    const colorIndex = colors.findIndex((c) => c.id === colorId);
    replaceColor({ ...colors[colorIndex], archive: true });
  };

  return {
    colors,
    editColorId,
    showArchive,
    addColor,
    editColor: setEditColorId,
    archiveColor,
    saveColor,
    cancelColor,
    setShowArchive,
  };
}
