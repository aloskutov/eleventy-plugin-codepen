'use strict';

/**
 * Parse params string
 * @param {string} params parameters string
 * @return {object} parsed parameters object
 */
const parseParams = (params = '') => {
  if (params === null) {
    params = '';
  }

  let cleanParams = params;

  if (typeof cleanParams === `string` ) {
    if ((cleanParams[0] === '{') && (cleanParams[cleanParams.length - 1] === '}')) {
      cleanParams = JSON.parse(cleanParams);
    } else {
      const tmpOpts = {};
      if (cleanParams.length > 0) {
        cleanParams.split(';').forEach((option) => {
          const [key, value] = option.split(':');
          tmpOpts[key] = value;
        });
      }
      cleanParams = tmpOpts;
    }
  }
  return cleanParams;
};

module.exports = parseParams;
