const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const { CONSTANTS } = require("./src/values.js");
const { renderBanner } = require("./src/renderBanner.js");
const { renderError } = require("./src/renderError");
const { getTheme } = require("./src/getTheme");
const { fetchApi } = require("./src/theApi");
const { getRandomArrayElement } = require("./src/values");
const themes = require("./src/themes.json");
const { createCanvas, version } = require("canvas");
const canvas = createCanvas(500, 100);
const ctx = canvas.getContext("2d");

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

app.get("/mc.png", async (req, res) => {
  //For request queries
  let = { srvAddress, srvType } = req.query;
  let result;
  if (Object.keys(req.query).length === 0) {
    result = "No query parameters found,use Readme";
  }

  try {
    let response = await fetchApi(srvAddress, srvType);
    if (response === "Server address & type required") {
      result = "Server address & type required";
    } else if (response === "Server address or type is missing") {
      renderError = "Server address or type is missing";
    } //AxiosError
    else if (response === "Request failed with status code 404") {
      renderError = "Request failed with status code 404";
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
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#000000";
        ctx.font = "12px sans-serif";
        ctx.textAlign = "left";
        ctx.fillText(`Hostname ${mhostname}`, 10, 40);
        ctx.fillText(`On ${ip}:${port}`, 350, 40);
        ctx.fillText(`Status ${srvStatus}`, 10, 60);
        ctx.fillText(`Type ${m_mapmode}`, 350, 60);
        ctx.fillText(`Player ${player}/${maxplayer}`, 10, 80);
        ctx.fillText(`Version ${version}`, 350, 80);
        ctx.font = "15px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(`Minecraft`, 250, 10);
      } else {
        result = "Server offline/not exists";
      }
    }
  } catch (e) {
    if (e.response) {
      result = e.response.status + e.response.data;
    }
  }

  //check
  if (result) {
    ctx.fillStyle = "#e05d44";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(result, canvas.width / 2, canvas.height / 2);
  }

  // generate the PNG image from the canvas
  const buffer = canvas.toBuffer();

  // set the response headers for the PNG image
  res.set("Content-Type", "image/png");
  res.set("Content-Length", buffer.length);

  // generate the HTML page with the image tag referencing the PNG image
  const html = `
   <html>
     <head>
       <meta property="og:title" content="Minecraft Server Status" />
       <meta property="og:image" content="data:image/png;base64,${buffer.toString(
         "base64"
       )}" />
     </head>
     <body>
       <h1>Nothing here</h1>
     </body>
   </html>
 `;

  // send the PNG image as the response
  res.send(buffer);
});

app.get("/", (req, res) => {
  res.redirect("https://github.com/jayantur13/serverstate-minecraft");
});

app.get("*", (req, res) => {
  res.redirect("https://github.com/jayantur13/serverstate-minecraft");
});

app.listen(process.env.PORT, () => console.log("Server running"));
