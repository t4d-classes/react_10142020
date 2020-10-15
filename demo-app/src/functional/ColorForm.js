import React from "react";

import { useForm } from "../hooks/useForm";

export function ColorForm({ buttonText, onSubmitColor }) {
  // React engines know which FiberNode we are working
  // on, and retrieves the state from the FiberNode
  const [colorForm, change, resetColorForm] = useForm({
    name: "",
    hexcode: "",
  });

  const submitColor = () => {
    onSubmitColor({ ...colorForm });
    resetColorForm();
  };

  return (
    <form>
      <div>
        <label htmlFor="color-name-input">Color Name:</label>
        <input
          type="text"
          id="color-name-input"
          name="name"
          value={colorForm.name}
          onChange={change}
        />
      </div>
      <div>
        <label htmlFor="color-hexcode-input">Color Hexcode:</label>
        <input
          type="text"
          id="color-hexcode-input"
          name="hexcode"
          value={colorForm.hexcode}
          onChange={change}
        />
      </div>
      <button type="button" onClick={submitColor}>
        {buttonText}
      </button>
    </form>
  );
}

ColorForm.defaultProps = {
  buttonText: "Submit Color",
};
