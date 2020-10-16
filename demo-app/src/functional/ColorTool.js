import React from "react";

import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm";

import { useColorToolStoreContext } from "../contexts/colorToolStoreContext";

export function ColorTool() {
  const {
    colors,
    editColorId,
    showArchive,
    addColor,
    editColor,
    archiveColor,
    saveColor,
    cancelColor,
    setShowArchive,
  } = useColorToolStoreContext();

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
        editColorId={editColorId}
        onEdit={editColor}
        onArchive={archiveColor}
        onSave={saveColor}
        onCancel={cancelColor}
      />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );
}
