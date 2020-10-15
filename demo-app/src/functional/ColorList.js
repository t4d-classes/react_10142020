import React from "react";

import { ColorViewListItem } from "./ColorViewListItem";
import { ColorEditListItem } from "./ColorEditListItem";

export function ColorList({
  colors,
  editColorId,
  onEdit: edit,
  onArchive: archive,
  onSave: save,
  onCancel: cancel,
}) {
  return (
    <ul>
      {colors.map((color) =>
        color.id === editColorId ? (
          <ColorEditListItem
            key={color.id}
            color={color}
            onSave={save}
            onCancel={cancel}
          />
        ) : (
          <ColorViewListItem
            key={color.id}
            color={color}
            onEdit={edit}
            onArchive={archive}
          />
        )
      )}
    </ul>
  );
}

ColorList.defaultProps = {
  colors: [],
};
