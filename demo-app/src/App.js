import React from "react";

import { ColorTool as ColorToolFunc } from "./functional/ColorTool";
import { ColorTool as ColorToolClass } from "./class/ColorTool";

function App() {
  return (
    <div className="App">
      <div>
        <h2>Functional</h2>
        <ColorToolFunc />
      </div>
      <div>
        <h2>Class-based</h2>
        <ColorToolClass />
      </div>
    </div>
  );
}

export default App;
