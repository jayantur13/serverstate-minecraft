const renderError = (err) => {
  const bannerContent = `<svg version="1.1" width="500" height="100" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox="0 0 500 100">
  <rect width="500" height="100" rx="5" ry="5" style="fill:black;stroke-width:2" />
<g>
<text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" style="fill:red">${err}</text>
</g>
</svg>`;
  return bannerContent;
};

module.exports = { renderError };
