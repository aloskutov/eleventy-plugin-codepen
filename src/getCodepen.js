'use strict';

/**
 * Get Codepen JS code
 * @return {string} codepen script code
 */
const getCodepenJs = () => {
  const src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
  return `<script async src="${src}"></script>`;
};

/**
 * Get Codepen HTML code
 * @param {array} options parameters array
 * @param {string} url url or id string
 * @return {string} html code string
 */
const getCodepenHtml = (options, url) => {
  let tmpUrl;

  try {
    tmpUrl = new URL(url).pathname;
  } catch (e) {
    if (e instanceof TypeError) {
      gotUrl = new URL(`https://codepen.io//pen/${gotUrl}`);
    }
  }

  const path = tmpUrl;
  const id = path.split('/')[3];

  let code = `<p class="codepen"
  data-class="${options.class}"
  data-height="${options.height}"
  data-theme-id="${options.theme}"
  data-default-tab="${options.tab}"
  data-slug-hash="${id}">
<span><a href="${url}">See the Pen </a></span></p>`;

  if (options.insertJS) {
    code = `${code}\n${getCodepenJs()}`;
  }

  return code;
};

module.exports = {getCodepenHtml, getCodepenJs};
