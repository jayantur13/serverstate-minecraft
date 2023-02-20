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

app.get("/mc.svg", async (req, res) => {
  //For request queries
  let = { srvAddress, srvType } = req.query;
  let svg;
  let result;
  if (Object.keys(req.query).length === 0) {
    result = "No query parameters found,use Readme";
    svg = errSvg(result);
  }

  try {
    let response = await fetchApi(srvAddress, srvType);
    if (response === "Server address & type required") {
      result = "Server address & type required";
      svg = errSvg(result);
    } else if (response === "Server address or type is missing") {
      result = "Server address or type is missing";
      svg = errSvg(result);
    } //AxiosError
    else if (response === "Request failed with status code 404") {
      result = "Request failed with status code 404";
      svg = errSvg(result);
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
        svg = genSvg(
          mhostname,
          ip,
          port,
          srvStatus,
          m_mapmode,
          player,
          maxplayer,
          version,
          result
        );
      } else {
        result = "Server offline/not exists";
        svg = errSvg(result);
      }
    }
  } catch (e) {
    if (e.response) {
      result = e.response.status + e.response.data;
      svg = errSvg(result);
    }
  }

  // generate the HTML page with the OG meta tags for the link preview
  const html = `
    <html>
      <head>
        <meta property="og:title" content="Minecraft Server Status" />
        <meta property="og:description" 
        content="This preview generated for minecraft by https://github.com/jayantur13/serverstate-minecraft" />
        <meta property="og:image" content="https://serverstate-minecraft.vercel.app/mc.svg" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:alt" content="Minecraft server status preview" />
      </head>
      <body>
        ${svg}
      </body>
    </html>
  `;

  res.set("Content-Type", "image/svg+xml");
  res.send(html);
});

app.get("/", (req, res) => {
  res.redirect("https://github.com/jayantur13/serverstate-minecraft");
});

app.get("*", (req, res) => {
  res.redirect("https://github.com/jayantur13/serverstate-minecraft");
});

const genSvg = (
  mhostname,
  ip,
  port,
  srvStatus,
  m_mapmode,
  player,
  maxplayer,
  version
) => {
  let msvg = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="500" height="200" xmlns:xlink='http://www.w3.org/1999/xlink' viewBox="0 0 500 200">
      <rect rx="5" ry="5" width="500" height="200" fill="#ffffff" style="stroke-width:2;stroke:rgb(0,0,0)" />
      <g transform="translate(150)">
      <path style="fill:#000000;fill-opacity:1;" d="M 42.144531 6.289062 C 42.144531 18.25 42.144531 30.132812 42.144531 42.09375 C 30.1875 42.09375 18.257812 42.09375 6.269531 42.09375 C 6.269531 30.175781 6.269531 18.273438 6.269531 6.289062 C 18.191406 6.289062 30.121094 6.289062 42.144531 6.289062 Z M 42.144531 6.289062 "/>
      <path style="fill:#ffffff;fill-opacity:1;" d="M 7.628906 7.628906 C 7.628906 18.679688 7.628906 29.621094 7.628906 40.621094 C 18.695312 40.621094 29.695312 40.621094 40.753906 40.621094 C 40.773438 40.285156 40.808594 7.554688 40.808594 7.554688 C 30.457031 7.585938 7.976562 7.613281 7.628906 7.628906 Z M 11.527344 14.257812 C 12.144531 14.257812 19.875 14.394531 19.875 14.394531 C 19.921875 16.542969 19.867188 19.042969 19.867188 21.28125 C 16.988281 21.28125 14.296875 21.28125 11.527344 21.28125 C 11.527344 18.960938 11.527344 16.6875 11.527344 14.257812 Z M 32.707031 35.816406 C 32.707031 35.816406 28.832031 35.808594 28.601562 35.816406 C 28.601562 35.816406 28.597656 35.820312 28.597656 35.816406 C 28.585938 35.816406 28.589844 35.816406 28.601562 35.816406 C 28.78125 35.757812 28.570312 32.046875 28.570312 32.046875 C 27.132812 32.046875 21.070312 32.0625 19.894531 32.03125 L 19.894531 35.714844 C 19.894531 35.714844 17.019531 35.722656 15.773438 35.722656 C 15.773438 32.101562 15.773438 28.644531 15.773438 25.050781 C 17.171875 25.050781 18.527344 25.050781 19.980469 25.050781 C 19.980469 23.828125 19.980469 22.730469 19.980469 21.558594 C 22.824219 21.558594 25.570312 21.558594 28.398438 21.558594 C 28.398438 22.660156 28.398438 23.730469 28.398438 24.894531 C 29.863281 24.894531 31.246094 24.894531 32.707031 24.894531 C 32.707031 28.558594 32.707031 32.132812 32.707031 35.816406 Z M 37.03125 21.300781 C 34.214844 21.300781 31.453125 21.300781 28.597656 21.300781 C 28.597656 18.96875 28.597656 16.640625 28.597656 14.253906 C 31.378906 14.253906 34.140625 14.253906 37.03125 14.253906 C 37.03125 16.617188 37.03125 18.921875 37.03125 21.300781 Z M 37.03125 21.300781 "/>
      </g>
      <g>
      <text x="90" y="35" transform="translate(105)" style="font-family:Segoe UI, Ubuntu, sans-serif;">Minecraft
      </text>
      </g>
      <g transform="translate(260)">
      <path style="fill:#000000;fill-opacity:1;" d="M 42.144531 6.289062 C 42.144531 18.25 42.144531 30.132812 42.144531 42.09375 C 30.1875 42.09375 18.257812 42.09375 6.269531 42.09375 C 6.269531 30.175781 6.269531 18.273438 6.269531 6.289062 C 18.191406 6.289062 30.121094 6.289062 42.144531 6.289062 Z M 42.144531 6.289062 "/>
      <path style="fill:#ffffff;fill-opacity:1;" d="M 7.628906 7.628906 C 7.628906 18.679688 7.628906 29.621094 7.628906 40.621094 C 18.695312 40.621094 29.695312 40.621094 40.753906 40.621094 C 40.773438 40.285156 40.808594 7.554688 40.808594 7.554688 C 30.457031 7.585938 7.976562 7.613281 7.628906 7.628906 Z M 11.527344 14.257812 C 12.144531 14.257812 19.875 14.394531 19.875 14.394531 C 19.921875 16.542969 19.867188 19.042969 19.867188 21.28125 C 16.988281 21.28125 14.296875 21.28125 11.527344 21.28125 C 11.527344 18.960938 11.527344 16.6875 11.527344 14.257812 Z M 32.707031 35.816406 C 32.707031 35.816406 28.832031 35.808594 28.601562 35.816406 C 28.601562 35.816406 28.597656 35.820312 28.597656 35.816406 C 28.585938 35.816406 28.589844 35.816406 28.601562 35.816406 C 28.78125 35.757812 28.570312 32.046875 28.570312 32.046875 C 27.132812 32.046875 21.070312 32.0625 19.894531 32.03125 L 19.894531 35.714844 C 19.894531 35.714844 17.019531 35.722656 15.773438 35.722656 C 15.773438 32.101562 15.773438 28.644531 15.773438 25.050781 C 17.171875 25.050781 18.527344 25.050781 19.980469 25.050781 C 19.980469 23.828125 19.980469 22.730469 19.980469 21.558594 C 22.824219 21.558594 25.570312 21.558594 28.398438 21.558594 C 28.398438 22.660156 28.398438 23.730469 28.398438 24.894531 C 29.863281 24.894531 31.246094 24.894531 32.707031 24.894531 C 32.707031 28.558594 32.707031 32.132812 32.707031 35.816406 Z M 37.03125 21.300781 C 34.214844 21.300781 31.453125 21.300781 28.597656 21.300781 C 28.597656 18.96875 28.597656 16.640625 28.597656 14.253906 C 31.378906 14.253906 34.140625 14.253906 37.03125 14.253906 C 37.03125 16.617188 37.03125 18.921875 37.03125 21.300781 Z M 37.03125 21.300781 "/>
      </g>
      <g>
      <text text-anchor="start" x="10" y="80" style="font-family:Segoe UI, Ubuntu, sans-serif;">Hostname ${mhostname}</text>
      <text text-anchor="start" x="310" y="80" style="font-family:Segoe UI, Ubuntu, sans-serif;">On ${ip}:${port}</text>
      </g>
      <g> 
      <text text-anchor="start" x="10" y="120" style="font-family:Segoe UI, Ubuntu, sans-serif;">Status ${srvStatus}</text>
      <text text-anchor="start" x="310" y="120" style="font-family:Segoe UI, Ubuntu, sans-serif;">Type ${m_mapmode}
      </text>
      </g>
      <g> 
      <text text-anchor="start" x="10" y="160" style="font-family:Segoe UI, Ubuntu, sans-serif;">Player ${player}/${maxplayer}</text>
      <text text-anchor="start" x="310" y="160" style="font-family:Segoe UI, Ubuntu, sans-serif;">Version ${version}</text>
      </g>
      </svg>
      `;
  return msvg;
};

const errSvg = (result) => {
  let msvg = `<svg version="1.1" width="500" height="100" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox="0 0 500 100">
  <rect width="500" height="100" rx="5" ry="5" style="fill:black;stroke-width:2" />
  <g>
  <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" style="fill:red">${result}</text>
  </g>
  </svg>`;
  return msvg;
};

app.listen(process.env.PORT, () => console.log("Server running"));
