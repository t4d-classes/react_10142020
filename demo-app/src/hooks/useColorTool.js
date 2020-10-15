import { useState, useDebugValue } from "react";

export function useColorTool() {
  const [colors, setColors] = useState([]);

  useDebugValue("colors: " + JSON.stringify(colors));

  const [showArchive, setShowArchive] = useState(false);

  useDebugValue("showArchive: " + showArchive);

  const addColor = (color) => {
    setColors([
      ...colors,
      {
        ...color,
        archive: false,
        id: Math.max(...colors.map((c) => c.id), 0) + 1,
      },
    ]);
  };

  const archiveColor = (colorId) => {
    const colorIndex = colors.findIndex((c) => c.id === colorId);
    const newColors = [...colors];
    newColors[colorIndex] = { ...newColors[colorIndex], archive: true };
    setColors(newColors);
  };

  return {
    colors,
    addColor,
    showArchive,
    setShowArchive,
    archiveColor,
  };
}
