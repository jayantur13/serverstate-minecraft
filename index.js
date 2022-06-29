const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { CONSTANTS } = require("./src/values.js");
const { renderBanner } = require("./src/renderBanner.js");
const { getTheme } = require("./src/getTheme");
const { fetchApi } = require("./src/theApi");
const { getRandomArrayElement } = require("./src/values");
const themes = require("./src/themes.json");

// Max cache age 30 seconds
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
    return res.send("No query parameters passed,use Readme");
  }

  try {
    let response = await fetchApi(srvAddress, srvType);
    if (response === "Please provide server address & type") {
      return res.send("Please provide server address & type");
    } else if (response === "Server address or type is missing,required both") {
      return res.send("Server address or type is missing,required both");
    } //AxiosError
    else if (response === "Request failed with status code 404") {
      return res.status(404).send("Request failed with status code 404");
    } //Http error
    else {
      let data = response.data;
      if (data.online === true) {
        let hostname = data.hostname;
        let ip = data.ip;
        let port = data.port;
        let status = data.online;
        let map;
        data.map === undefined ? (map = "unknown") : (map = data.map);
        let mode;
        data.gamemode !== null && data.gamemode !== undefined
          ? (mode = data.gamemode)
          : (mode = "unknown");

        let maxplayer = data.players.max;
        let player = data.players.online;
        let version = data.version;

        let mhostname;
        hostname !== null
          ? (mhostname = `${hostname}`)
          : (mhostname = "unknown");

        let srvStatus;
        status === true ? (srvStatus = "online") : (srvStatus = "offline");

        let m_mapmode;
        srvType === "main" ? (m_mapmode = `${map}`) : (m_mapmode = `${mode}`);
        res.setHeader("Content-Type", "image/svg+xml");
        res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);
        renderBannerRect = renderBanner(
          txtColor,
          fWeight,
          bgColor,
          borderColor === "transparent" ? "transparent" : borderColor,
          srvType,
          mhostname,
          ip,
          port,
          srvStatus,
          m_mapmode,
          player,
          maxplayer,
          version,
          headingColor,
          iconColor === "transparent" ? "transparent" : iconColor
        );
        return res.status(200).send(renderBannerRect);
      } else {
        return res.status(404).send("Either server is offline or not exists");
      }
    }
  } catch (e) {
    if (e.response) {
      return res.send(e.response.status + e.response.data);
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
