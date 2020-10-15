import React from "react";

import { useForm } from "../hooks/useForm";

export const ColorEditListItem = ({ color, onSave, onCancel: cancel }) => {
  const [colorForm, change] = useForm({
    name: color.name,
    hexcode: color.hexcode,
  });

  const save = () => {
    onSave({
      ...color,
      ...colorForm,
    });
  };

  return (
    <li>
      <input
        type="text"
        id="color-name-input"
        name="name"
        value={colorForm.name}
        onChange={change}
      />{" "}
      <input
        type="text"
        id="color-hexcode-input"
        name="hexcode"
        value={colorForm.hexcode}
        onChange={change}
      />
      <button type="button" onClick={save}>
        Save
      </button>
      <button type="button" onClick={cancel}>
        Cancel
      </button>
    </li>
  );
};
