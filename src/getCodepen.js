'use strict';

const getCodepenJs = require('./getCodepenJs');
const getSlugHash = require('./getSlugHash');

/**
 * Get Codepen HTML code
 * @param {array} options parameters array
 * @param {string} url url or id string
 * @return {string} html code string
 */
const getCodepenHtml = (options, url) => {
  if (!options) {
    throw new TypeError('Options undefined or empty!');
  }
  if (!url) {
    throw new TypeError('URL string undefined or empty!');
  }

  let gotUrl = url;
  let tmpHash;

  try {
    gotUrl = new URL(gotUrl);
  } catch (e) {
    if (e instanceof TypeError) {
      tmpHash = gotUrl;
      gotUrl = new URL(`https://codepen.io//pen/${gotUrl}`);
    }
  }

  const slugHash = tmpHash ? tmpHash : getSlugHash(gotUrl.pathname);

  let code = `<p class="codepen"
  data-class="${options.class}"
  data-height="${options.height}"
  data-theme-id="${options.theme}"
  data-default-tab="${options.tab}"
  data-slug-hash="${slugHash}">
<span><a href="${gotUrl}">See the Pen </a></span></p>`;

  if (options.insertJS) {
    code = `${code}\n${getCodepenJs()}`;
  }

  return code;
};

module.exports = {getCodepenHtml, getCodepenJs};
