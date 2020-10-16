import React from "react";

import { ColorForm } from "./ColorForm";

import { useColorToolStoreContext } from "../contexts/colorToolStoreContext";

export function ColorFormContainer() {
  const { addColor } = useColorToolStoreContext();

  return <ColorForm buttonText="Add Color" onSubmitColor={addColor} />;
}
