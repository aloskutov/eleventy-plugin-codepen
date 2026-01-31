import parseParams from './src/parseParams.js';
import getCodepenHtml from './src/getCodepen.js';
import getCodepenJs from './src/getCodepenJs.js';

export default (eleventyConfig, options = {}) => {

  const defaultCodepen = {
    'tab': 'result',
    'height': 450,
    'theme': '',
    'class': '',
    'insertJS': false,
    ...options
  };

  eleventyConfig.addShortcode('codepen_js', () => {
    return getCodepenJs();
  });

  eleventyConfig.addShortcode('codepen', (url, params) => {
    const codepenOptions = Object.assign(
      {},
      defaultCodepen,
      parseParams(params)
    );

    return getCodepenHtml(codepenOptions, url);
  });

  return {
  };
};
