'use strict';

const getCodepenJs = require('./getCodepenJs');
const { getCodepenUrl } = require('./getCodepenUrl');
const { getPathParams } = require('./getPathParams');

/**
 * Сhecks for the presence of the necessary parameters
 * @param {Object} options
 * @param {String} url
 */
const checkParams = (options, url) => {
  if (!options) {
    throw new TypeError('Options undefined or empty!');
  }
  if (!url) {
    throw new TypeError('URL string undefined or empty!');
  }
};

/**
 * Returns the string parameter data-user
 * @param {string} user
 * @returns string
 */
const getDataUser = (user) => {
  return user ? `\n  data-user="${user}"` : '';
};

/**
 * Get Codepen HTML code
 * @param {array} options parameters array
 * @param {string} url url or id string
 * @return {string} html code string
 */
const getCodepenHtml = (options, url) => {

  checkParams(options, url);

  const gotUrl = getCodepenUrl(url);
  const pathParams = getPathParams(gotUrl.pathname);
  const dataUser = getDataUser(pathParams.user);


  const code = `<p class="codepen"
  data-class="${options.class}"
  data-height="${options.height}"
  data-theme-id="${options.theme}"
  data-default-tab="${options.tab}"
  data-slug-hash="${pathParams.hash}"${dataUser}>
  <span><a href="${gotUrl}">See the Pen </a></span></p>`;

  return options.insertJS ? `${code}\n${getCodepenJs()}` : code;
};

module.exports = {getCodepenHtml};
