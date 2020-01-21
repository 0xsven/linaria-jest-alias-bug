import React from "react";
import ReactDOM from "react-dom";

import ImportBox from "./ImportBox";

describe("Site protection", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ImportBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
