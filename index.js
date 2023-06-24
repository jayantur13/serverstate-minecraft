const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { CONSTANTS } = require("./src/values.js");
const { renderBanner } = require("./src/renderBanner.js");
const { renderError } = require("./src/renderError");
const { getTheme } = require("./src/getTheme");
const { fetchApi } = require("./src/theApi");
const { getRandomArrayElement } = require("./src/values");
const themes = require("./src/themes.json");

// Max cache age 1 minute
const cacheSeconds = CONSTANTS.ONE_MINUTE;

//Using cors
app.use(cors());

//Actual requests
app.get("/api", async (req, res) => {
  //For request queries
  let = {
    srvAddress,
    srvType,
    fontWeight,
    headingColor,
    iconColor,
    txtColor,
    bgColor,
    borderColor,
    themeval,
  } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);

  let renderBannerRect = "";

  themeval = themeval ? themeval.toLowerCase() : themeval;
  if (themeval === undefined)
    themeval = getRandomArrayElement(Object.keys(themes));

  let colorTheme = getTheme(themeval);
  if (colorTheme) bgColor = bgColor || colorTheme.bgColor;
  txtColor = txtColor || colorTheme.txtColor;
  headingColor = headingColor || colorTheme.headingColor;
  iconColor = iconColor || colorTheme.iconColor;
  let fWeight;
  fontWeight === undefined ? (fWeight = "normal") : (fWeight = fontWeight);

  if (Object.keys(req.query).length === 0) {
    let renderBannerErr = renderError("No query parameters found,use Readme");
    return res.send(renderBannerErr);
  }

  try {
    let response = await fetchApi(srvAddress, srvType);
    if (response === "Server address & type required") {
      let renderBannerErr = renderError("Server address & type required");
      return res.send(renderBannerErr);
    } else if (response === "Server address or type is missing") {
      let renderBannerErr = renderError("Server address or type is missing");
      return res.send(renderBannerErr);
    } //AxiosError
    else if (response === "Request failed with status code 404") {
      let renderBannerErr = renderError("Request failed with status code 404");
      return res.send(renderBannerErr);
    } //Http error
    else {
      let data = response.data;
      if (data.online === true) {
        let hostname = data.host;
        let port = data.port;
        let status = data.online;
        let mode;
        data.gamemode !== null && data.gamemode !== undefined
          ? (mode = data.gamemode)
          : (mode = "unknown");

        let maxplayer = data.players.max;
        let player = data.players.online;
        let version =
          srvType === "java" ? data.version.name_clean : data.version.name;

        let mhostname;
        hostname !== null
          ? (mhostname = `${hostname}`)
          : (mhostname = "unknown");

        let srvStatus;
        status === true ? (srvStatus = "online") : (srvStatus = "offline");

        let m_mapmode;
        srvType === "bedrock"
          ? (m_mapmode = `${mode}`)
          : (m_mapmode = `N/A`);
        renderBannerRect = renderBanner(
          txtColor,
          fWeight,
          bgColor,
          borderColor === "transparent" ? "transparent" : borderColor,
          srvType,
          mhostname,
          port,
          srvStatus,
          m_mapmode === "Not found" ? "Not found" : "N/A",
          player,
          maxplayer,
          version === "" ? "N/A (&lt; 1.3)" : version,
          headingColor,
          iconColor === "transparent" ? "transparent" : iconColor
        );
        return res.status(200).send(renderBannerRect);
      } else {
        let renderBannerErr = renderError("Server offline/not exists");
        return res.send(renderBannerErr);
      }
    }
  } catch (e) {
    if (e.response) {
      let renderBannerErr = renderError(e.response.status + e.response.data);
      return res.send(renderBannerErr);
    }
  }
});

app.get("/", (req, res) => {
  res.redirect("https://github.com/jayantur13/serverstate-minecraft");
});

app.get("*", (req, res) => {
  res.redirect("https://github.com/jayantur13/serverstate-minecraft");
});

app.listen(process.env.PORT, () => console.log("Server running"));
