const getCodepenJs = require('./getCodepenJs');
const getCodepenUrl = require('./getCodepenUrl');
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

  const gotUrl = getCodepenUrl(url);
  const slugHash = getSlugHash(gotUrl.pathname);

  const code = `<p class="codepen"
  data-class="${options.class}"
  data-height="${options.height}"
  data-theme-id="${options.theme}"
  data-default-tab="${options.tab}"
  data-slug-hash="${slugHash}">
  <span><a href="${gotUrl}">See the Pen </a></span></p>`;

  return options.insertJS ? `${code}\n${getCodepenJs()}` : code;
};

module.exports = {getCodepenHtml, getCodepenJs};
