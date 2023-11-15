'use strict';

/**
 * Get params from URL path
 * @param {string} path
 * @return {string}
 */
const getPathParams = (path) => {
  const regex = /^\/(?<user>[\w\u002d]{0,127})\/pen\/(?<slug>\w{1,127})(?<hash>\/\w{1,127}){0,1}$/ui;
  const matches = regex.exec(path);

  return {
    user: matches.groups.user ? matches.groups.user : null,
    hash: matches.groups.hash ? `${matches.groups.slug}${matches.groups.hash}` :  matches.groups.slug
  };
};

module.exports = { getPathParams };
