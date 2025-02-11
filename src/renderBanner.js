const renderBanner = (
  txtColor,
  fWeight,
  bgColor,
  borderColor,
  srvType,
  mhostname,
  port,
  srvStatus,
  m_mapmode,
  player,
  maxplayer,
  version,
  headingColor,
  iconColor
) => {
  const bannerContent = `<svg version="1.1" width="500" height="200" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox="0 0 500 200">
  <rect width="500" height="200" rx="5" ry="5" style="fill:${bgColor};
   strokeWidth:2;
   stroke:${borderColor}"/>
   <style type="text/css">
   <![CDATA[
   @keyframes fadein {
       0% { opacity: 0; }
       100% { opacity: 1; }
   }
  ]]>
</style>
<g transform="translate(150)">
<path style="opacity:0;animation: fadein 0.5s linear forwards 0.7s;fill-rule:evenodd;fill:${iconColor};fill-opacity:1;" d="M 42.144531 6.289062 C 42.144531 18.25 42.144531 30.132812 42.144531 42.09375 C 30.1875 42.09375 18.257812 42.09375 6.269531 42.09375 C 6.269531 30.175781 6.269531 18.273438 6.269531 6.289062 C 18.191406 6.289062 30.121094 6.289062 42.144531 6.289062 Z M 42.144531 6.289062 "/>
<path style="opacity:0;animation: fadein 0.5s linear forwards 0.7s;fill-rule:evenodd;fill:${bgColor};fill-opacity:1;" d="M 7.628906 7.628906 C 7.628906 18.679688 7.628906 29.621094 7.628906 40.621094 C 18.695312 40.621094 29.695312 40.621094 40.753906 40.621094 C 40.773438 40.285156 40.808594 7.554688 40.808594 7.554688 C 30.457031 7.585938 7.976562 7.613281 7.628906 7.628906 Z M 11.527344 14.257812 C 12.144531 14.257812 19.875 14.394531 19.875 14.394531 C 19.921875 16.542969 19.867188 19.042969 19.867188 21.28125 C 16.988281 21.28125 14.296875 21.28125 11.527344 21.28125 C 11.527344 18.960938 11.527344 16.6875 11.527344 14.257812 Z M 32.707031 35.816406 C 32.707031 35.816406 28.832031 35.808594 28.601562 35.816406 C 28.601562 35.816406 28.597656 35.820312 28.597656 35.816406 C 28.585938 35.816406 28.589844 35.816406 28.601562 35.816406 C 28.78125 35.757812 28.570312 32.046875 28.570312 32.046875 C 27.132812 32.046875 21.070312 32.0625 19.894531 32.03125 L 19.894531 35.714844 C 19.894531 35.714844 17.019531 35.722656 15.773438 35.722656 C 15.773438 32.101562 15.773438 28.644531 15.773438 25.050781 C 17.171875 25.050781 18.527344 25.050781 19.980469 25.050781 C 19.980469 23.828125 19.980469 22.730469 19.980469 21.558594 C 22.824219 21.558594 25.570312 21.558594 28.398438 21.558594 C 28.398438 22.660156 28.398438 23.730469 28.398438 24.894531 C 29.863281 24.894531 31.246094 24.894531 32.707031 24.894531 C 32.707031 28.558594 32.707031 32.132812 32.707031 35.816406 Z M 37.03125 21.300781 C 34.214844 21.300781 31.453125 21.300781 28.597656 21.300781 C 28.597656 18.96875 28.597656 16.640625 28.597656 14.253906 C 31.378906 14.253906 34.140625 14.253906 37.03125 14.253906 C 37.03125 16.617188 37.03125 18.921875 37.03125 21.300781 Z M 37.03125 21.300781 "/>
</g>
   <g>
     <text x="90" y="35" transform="translate(105)" style="letter-spacing:0.5px;opacity:0;animation: fadein 0.5s linear forwards 0.7s;font-family:Segoe UI, Ubuntu, sans-serif;font-size:20px;fill:${headingColor};">Minecraft
     </text>
   </g>
   <g transform="translate(280)">
<path style="opacity:0;animation: fadein 0.5s linear forwards 0.7s;fill-rule:evenodd;fill:${iconColor};fill-opacity:1;" d="M 42.144531 6.289062 C 42.144531 18.25 42.144531 30.132812 42.144531 42.09375 C 30.1875 42.09375 18.257812 42.09375 6.269531 42.09375 C 6.269531 30.175781 6.269531 18.273438 6.269531 6.289062 C 18.191406 6.289062 30.121094 6.289062 42.144531 6.289062 Z M 42.144531 6.289062 "/>
<path style="opacity:0;animation: fadein 0.5s linear forwards 0.7s;fill-rule:evenodd;fill:${bgColor};fill-opacity:1;" d="M 7.628906 7.628906 C 7.628906 18.679688 7.628906 29.621094 7.628906 40.621094 C 18.695312 40.621094 29.695312 40.621094 40.753906 40.621094 C 40.773438 40.285156 40.808594 7.554688 40.808594 7.554688 C 30.457031 7.585938 7.976562 7.613281 7.628906 7.628906 Z M 11.527344 14.257812 C 12.144531 14.257812 19.875 14.394531 19.875 14.394531 C 19.921875 16.542969 19.867188 19.042969 19.867188 21.28125 C 16.988281 21.28125 14.296875 21.28125 11.527344 21.28125 C 11.527344 18.960938 11.527344 16.6875 11.527344 14.257812 Z M 32.707031 35.816406 C 32.707031 35.816406 28.832031 35.808594 28.601562 35.816406 C 28.601562 35.816406 28.597656 35.820312 28.597656 35.816406 C 28.585938 35.816406 28.589844 35.816406 28.601562 35.816406 C 28.78125 35.757812 28.570312 32.046875 28.570312 32.046875 C 27.132812 32.046875 21.070312 32.0625 19.894531 32.03125 L 19.894531 35.714844 C 19.894531 35.714844 17.019531 35.722656 15.773438 35.722656 C 15.773438 32.101562 15.773438 28.644531 15.773438 25.050781 C 17.171875 25.050781 18.527344 25.050781 19.980469 25.050781 C 19.980469 23.828125 19.980469 22.730469 19.980469 21.558594 C 22.824219 21.558594 25.570312 21.558594 28.398438 21.558594 C 28.398438 22.660156 28.398438 23.730469 28.398438 24.894531 C 29.863281 24.894531 31.246094 24.894531 32.707031 24.894531 C 32.707031 28.558594 32.707031 32.132812 32.707031 35.816406 Z M 37.03125 21.300781 C 34.214844 21.300781 31.453125 21.300781 28.597656 21.300781 C 28.597656 18.96875 28.597656 16.640625 28.597656 14.253906 C 31.378906 14.253906 34.140625 14.253906 37.03125 14.253906 C 37.03125 16.617188 37.03125 18.921875 37.03125 21.300781 Z M 37.03125 21.300781 "/>
</g>
   <g> 
   <a xlink:href="/#please-do-not-click" xlink:title="Hostname ${mhostname} and type ${srvType}"><text text-anchor="start" x="10" y="80" style="opacity:0;animation: fadein 0.5s linear forwards 0.7s;font-family:Segoe UI, Ubuntu, sans-serif;fill:${txtColor};
   font-weight:${fWeight}">Hostname ${mhostname}</text></a>
  <a xlink:href='/#do-not-click-just-for-info' xlink:title='Port No. ${port} '><text text-anchor="start" x="320" y="80" style="opacity:0;animation: fadein 0.5s linear forwards 0.7s;font-family:Segoe UI, Ubuntu, sans-serif;fill:${txtColor};
   font-weight:${fWeight}">Port No. ${port}</text></a>
   </g>
   <g> 
   <text text-anchor="start" x="10" y="120" style="opacity:0;animation: fadein 0.5s linear forwards 0.7s;font-family:Segoe UI, Ubuntu, sans-serif;fill:${txtColor};
   font-weight:${fWeight}">Status ${srvStatus}</text>
   <text text-anchor="start" x="320" y="120" style="opacity:0;animation: fadein 0.5s linear forwards 0.7s;font-family:Segoe UI, Ubuntu, sans-serif;fill:${txtColor};
   font-weight:${fWeight}">Map/mode ${m_mapmode}
  </text>
   </g>
   <g> 
   <text text-anchor="start" x="10" y="160" style="opacity:0;animation: fadein 0.5s linear forwards 0.7s;font-family:Segoe UI, Ubuntu, sans-serif;fill:${txtColor};
   font-weight:${fWeight}">In-game ${player}/${maxplayer}</text>
   <a xlink:href='/#do-not-click-just-for-info' xlink:title='Version ${version} supported'><text text-anchor="start" x="320" y="160" style="opacity:0;animation: fadein 0.5s linear forwards 0.7s;font-family:Segoe UI, Ubuntu, sans-serif;fill:${txtColor};
   font-weight:${fWeight}">Version ${version}</text></a></g>
   </svg>`;
  return bannerContent;
};

module.exports = {
  renderBanner,
};
