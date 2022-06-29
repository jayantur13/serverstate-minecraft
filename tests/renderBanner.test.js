const fs = require("fs");
const { renderBanner } = require("../src/renderBanner");
const { getTheme } = require("../src/getTheme");
const themes = require("../src/themes.json");
const { getRandomArrayElement } = require("../src/values");

//Full customisation test
let renderWithOpts1 = renderBanner(
  "#000000",
  "bold",
  "#ffffff",
  "#000000",
  "main",
  "server.pokecentral.org",
  "45.88.229.25",
  "25565",
  true,
  "unknown",
  71,
  4000,
  "1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x, 1.13.x, 1.14.x, 1.15.x, 1.16.x, 1.17.x, 1.18.x",
  "#000000",
  "#4c71f2"
);

let expected1 = fs.writeFile(
  "tests/expected/test_srv_banner1.svg",
  renderWithOpts1,
  (err) => {
    if (err) return "Cannot create svg file";
    else return "Svg file created";
  }
);
let status1;
expected1 === "Svg file created"
  ? (status1 = "Cannot create svg file")
  : (status1 = renderWithOpts1);
const returnVal1 = { status1 };

//undefined or transparent passed for icon and border
let renderWithOpts2 = renderBanner(
  "#000000",
  "bold",
  "#ffffff",
  "transparent",
  "main",
  "server.pokecentral.org",
  "45.88.229.25",
  "25565",
  true,
  "unknown",
  71,
  4000,
  "1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x, 1.13.x, 1.14.x, 1.15.x, 1.16.x, 1.17.x, 1.18.x",
  "#000000",
  "transparent"
);

let expected2 = fs.writeFile(
  "tests/expected/test_srv_banner2.svg",
  renderWithOpts2,
  (err) => {
    if (err) return "Cannot create svg file";
    else return "Svg file created";
  }
);
let status2;
expected2 === "Svg file created"
  ? (status2 = "Cannot create svg file")
  : (status2 = renderWithOpts2);
const returnVal2 = { status2 };

//Get theme property,additionally pass fontWeight & borderColor
let bgColor, txtColor, headingColor, iconColor;
let colorTheme = getTheme("cobalt");
bgColor = colorTheme.bgColor;
txtColor = colorTheme.txtColor;
headingColor = colorTheme.headingColor;
iconColor = colorTheme.iconColor;
let renderWithOpts3 = renderBanner(
  txtColor,
  "normal",
  bgColor,
  "transparent",
  "main",
  "server.pokecentral.org",
  "45.88.229.25",
  "25565",
  true,
  "unknown",
  71,
  4000,
  "1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x, 1.13.x, 1.14.x, 1.15.x, 1.16.x, 1.17.x, 1.18.x",
  headingColor,
  iconColor
);

let expected3 = fs.writeFile(
  "tests/expected/test_srv_banner3.svg",
  renderWithOpts3,
  (err) => {
    if (err) return "Cannot create svg file";
    else return "Svg file created";
  }
);
let status3;
expected3 === "Svg file created"
  ? (status3 = "Cannot create svg file")
  : (status3 = renderWithOpts3);
const returnVal3 = { status3 };

//Set default theme for invalid themes
let rcolorTheme = getTheme("invalid-theme");
bgColor = rcolorTheme.bgColor;
txtColor = rcolorTheme.txtColor;
headingColor = rcolorTheme.headingColor;
iconColor = rcolorTheme.iconColor;
let renderWithOpts4 = renderBanner(
  txtColor,
  "normal",
  bgColor,
  "transparent",
  "main",
  "server.pokecentral.org",
  "45.88.229.25",
  "25565",
  true,
  "unknown",
  71,
  4000,
  "1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x, 1.13.x, 1.14.x, 1.15.x, 1.16.x, 1.17.x, 1.18.x",
  headingColor,
  iconColor
);

let expected4 = fs.writeFile(
  "tests/expected/test_srv_banner4.svg",
  renderWithOpts4,
  (err) => {
    if (err) return "Cannot create svg file";
    else return "Svg file created";
  }
);
let status4;
expected4 === "Svg file created"
  ? (status4 = "Cannot create svg file")
  : (status4 = renderWithOpts4);
const returnVal4 = { status4 };

//No theme (undefined) sets a random theme;but you have to run test/server everytime
let aRColorTheme = getRandomArrayElement(Object.keys(themes));
let acolorTheme = getTheme(aRColorTheme);
bgColor = acolorTheme.bgColor;
txtColor = acolorTheme.txtColor;
headingColor = acolorTheme.headingColor;
iconColor = acolorTheme.iconColor;
let renderWithOpts5 = renderBanner(
  txtColor,
  "normal",
  bgColor,
  "transparent",
  "main",
  "server.pokecentral.org",
  "45.88.229.25",
  "25565",
  true,
  "unknown",
  71,
  4000,
  "1.8.x, 1.9.x, 1.10.x, 1.11.x, 1.12.x, 1.13.x, 1.14.x, 1.15.x, 1.16.x, 1.17.x, 1.18.x",
  headingColor,
  iconColor
);

let expected5 = fs.writeFile(
  "tests/expected/test_srv_banner5.svg",
  renderWithOpts5,
  (err) => {
    if (err) return "Cannot create svg file";
    else return "Svg file created";
  }
);
let status5;
expected5 === "Svg file created"
  ? (status5 = "Cannot create svg file")
  : (status5 = renderWithOpts5);
const returnVal5 = { status5 };

describe("Render server banner", () => {
  it("should render banner with opts1", () => {
    expect(renderWithOpts1).toEqual(returnVal1.status1);
  });
  it("should render banner with opts2", () => {
    expect(renderWithOpts2).toEqual(returnVal2.status2);
  });
  it("should render banner with theme", () => {
    expect(renderWithOpts3).toEqual(returnVal3.status3);
  });
  it("should render banner with default theme", () => {
    expect(renderWithOpts4).toEqual(returnVal4.status4);
  });
  it("should render banner with random theme", () => {
    expect(renderWithOpts5).toEqual(returnVal5.status5);
  });
});
