import React from "react";

export function ColorList({ colors, onArchive }) {
  return (
    <ul>
      {colors.map((color) => (
        <li key={color.id}>
          {color.name} {color.hexcode}
          <button type="button" onClick={() => onArchive(color.id)}>
            Archive
          </button>
        </li>
      ))}
    </ul>
  );
}

ColorList.defaultProps = {
  colors: [],
};
