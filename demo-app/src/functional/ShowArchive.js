import React from "react";

export function ShowArchive({ showArchive, onSetShowArchive: setShowArchive }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={showArchive}
        onChange={() => setShowArchive(!showArchive)}
      />
      Show Archive
    </div>
  );
}
