import React from "react";
import ReactDOM from "react-dom";

import SimpleBox from "./SimpleBox";

describe("Site protection", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SimpleBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
