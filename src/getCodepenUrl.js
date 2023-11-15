'use strict';

/**
 * Check the received hash
 * @param {string} hash received hash
 * @returns boolean
 */
const hasHash = (hash) => {
  const pattern = /^\w{1,127}(?:\/\w{1,127}){0,1}$/u;

  return pattern.test(hash);
};

/**
 * Check the received path
 * @param {string} path received path
 * @returns boolean
 */
const hasPath = (path) => {
  const pattern = /^[\w\u002d]{1,127}\/pen\/\w{1,127}(?:\/\w{1,127}){0,1}\/{0,1}$/ui;

  return pattern.test(path);
};

/**
 * Get CodePen url
 * @param {string} url url or slug hash, or path (author/pen/hash)
 * @return {string} codepen url
 */
const getCodepenUrl = (url) => {
  let gotUrl = url;

  try {
    gotUrl = new URL(gotUrl);
  } catch (e) {
    gotUrl = hasPath(gotUrl) ? new URL(`https://codepen.io/${gotUrl}`) : new URL(`https://codepen.io//pen/${gotUrl}`);
  }

  return gotUrl;
};

module.exports = {getCodepenUrl, hasHash, hasPath};
