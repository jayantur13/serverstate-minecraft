const { getTheme } = require("../src/getTheme");
const themes = require("../src/themes.json");

//When a theme name is provided
const theme = {
  themename: themes["vue-dark"],
};
//Invalid theme,set default then
const defaultz = {
  themename: themes["default"],
};

describe("Get theme", () => {
  it("should check if theme is present", () => {
    expect(getTheme("vue-dark")).toEqual(theme.themename);
  });
  it("should check if theme is invalid (set default)", () => {
    expect(getTheme("invalid")).toEqual(defaultz.themename);
  });
});
