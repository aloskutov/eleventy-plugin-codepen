'use strict';

const parseParams = require('./src/parseParams');
const {getCodepenHtml, getCodepenJs} = require('./src/getCodepen');

module.exports = (eleventyConfig, options = {}) => {

  const defaultCodepen = {
    'tab': 'result',
    'height': 450,
    'theme': '',
    'class': '',
    'insertJS': false,
    ...options
  };

  eleventyConfig.addShortcode("codepen_js", () => {
    return getCodepenJs();
  });

  eleventyConfig.addShortcode("codepen", (url, params) => {
    const localOptions = Object.assign(
      {},
      defaultCodepen,
      parseParams(params)
    );

    return getCodepenHtml(localOptions, url);
  });

  return {
  };
};
