'use strict';

/**
 * Get slug hash from path
 * @param {string} path
 * @return {string}
 */
const getSlugHash = (path) => {
  const regex =  new RegExp(`^\\/(?<author>[\\w-]{0,127})\\/(?<pen>\\w{3})\\/(?<slug>\\w{1,127})(?:\\/(?<hash>\\w{1,127})){0,1}\\w{0,127}$`, 'u');
  const matches = regex.exec(path);

  return matches.groups.hash ? matches.groups.hash : matches.groups.slug ;
};

module.exports = getSlugHash;
