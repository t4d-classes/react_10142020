import React, { useState } from "react";

import { ColorList } from "./ColorList";
import { ColorForm } from "./ColorForm";

export function ColorTool() {
  const [colors, setColors] = useState([]);

  const addColor = (color) => {
    setColors([
      ...colors,
      { ...color, id: Math.max(...colors.map((c) => c.id), 0) + 1 },
    ]);
  };

  return (
    <>
      <ColorList colors={colors} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
    </>
  );
}
