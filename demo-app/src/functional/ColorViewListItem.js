import React from "react";

export const ColorViewListItem = ({
  color,
  onEdit: edit,
  onArchive: archive,
}) => {
  return (
    <li>
      {color.name} {color.hexcode}
      <button type="button" onClick={() => edit(color.id)}>
        Edit
      </button>
      <button type="button" onClick={() => archive(color.id)}>
        Archive
      </button>
    </li>
  );
};
