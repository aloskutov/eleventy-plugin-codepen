'use strict';

/**
 * Get slug hash from path
 * @param {string} path
 * @return {string}
 */
const getSlugHash = (path) => {
  const regex = /^\/(?<author>[\w-]{0,127})\/(?<pen>\w{3})\/(?<slug>\w{1,127}).{0,127}$/u;
  const matches = regex.exec(path);

  return matches.groups.slug;
};

module.exports = getSlugHash;
