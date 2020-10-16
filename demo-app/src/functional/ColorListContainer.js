import React from "react";

import { ShowArchive } from "./ShowArchive";
import { ColorList } from "./ColorList";

import { useColorToolStoreContext } from "../contexts/colorToolStoreContext";

export function ColorListContainer() {
  const {
    colors,
    editColorId,
    showArchive,
    editColor,
    archiveColor,
    saveColor,
    cancelColor,
    setShowArchive,
  } = useColorToolStoreContext();

  return (
    <>
      <ShowArchive
        showArchive={showArchive}
        onSetShowArchive={setShowArchive}
      />
      <ColorList
        colors={colors.filter((c) => !c.archive || showArchive)}
        editColorId={editColorId}
        onEdit={editColor}
        onArchive={archiveColor}
        onSave={saveColor}
        onCancel={cancelColor}
      />
    </>
  );
}
