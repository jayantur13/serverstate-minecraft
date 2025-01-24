const themes = require("../src/themes.json");

const getTheme = (themeval) => {
  //Invalid theme name then set as "default"
  if (!themes[themeval]) themeval = "default";

  //Valid theme given by user
  const colorTheme = themes[themeval];
  return colorTheme;
};

module.exports = { getTheme };
