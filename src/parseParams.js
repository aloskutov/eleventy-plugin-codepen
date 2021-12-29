'use strict';

/**
 * Parse params string
 * @param {string} params parameters string
 * @return {object} parsed parameters object
 */
const parseParams = (params) => {
  if (params === null || params === undefined) {
    params = '';
  }
  if (typeof params === `string` ) {
    if ((params[0] === '{') && (params[params.length - 1] === '}')) {
      params = JSON.parse(params);
    } else {
      const tmpOpts = {};
      if (params.length > 0) {
        params.split(';').forEach((option) => {
          const [key, value] = option.split(':');
          tmpOpts[key] = value;
        });
      }
      params = tmpOpts;
    }
  }
  return params;
};

module.exports = parseParams;
