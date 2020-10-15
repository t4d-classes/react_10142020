import React from "react";

import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm";

import { useColorTool } from "../hooks/useColorTool";

export function ColorTool() {
  const {
    colors,
    addColor,
    showArchive,
    setShowArchive,
    archiveColor,
  } = useColorTool();

  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={showArchive}
          onChange={() => setShowArchive(!showArchive)}
        />
        Show Archive
      </div>
      <ColorList
        colors={colors.filter((c) => !c.archive || showArchive)}
        onArchive={archiveColor}
      />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );
}
