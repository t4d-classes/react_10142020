import React from "react";

export function ColorList({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <li key={color.id}>
          {color.name} {color.hexcode}
        </li>
      ))}
    </ul>
  );
}

ColorList.defaultProps = {
  colors: [],
};
