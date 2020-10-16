import { useState, useDebugValue, useCallback } from "react";

import { useList } from "./useList";

export function useColorTool() {
  const [colors, appendColor, replaceColor] = useList(
    useCallback(function getColors() {
      return fetch("http://localhost:3060/colors").then((res) => {
        return res.json();
      });
    }, [])
  );

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
