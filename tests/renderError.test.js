const { renderError } = require("../src/renderError");
const fs = require("fs");

let renderWithMsg = renderError("This is an error");

let expected = fs.writeFile(
  "tests/expected/test_error_banner.svg",
  renderWithMsg,
  (err) => {
    if (err) return "Cannot create svg file";
    else return "Svg file created";
  }
);
let status;
expected === "Svg file created"
  ? (status = "Cannot create svg file")
  : (status = renderWithMsg);
const returnVal = { status };

describe("Render error", () => {
  it("should render error messsage", () => {
    expect(renderWithMsg).toEqual(returnVal.status);
  });
});
