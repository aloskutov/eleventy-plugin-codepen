'use strict';

/**
 * Get Codepen JS code
 * @return {string} codepen script code
 */
const getCodepenJs = () => {
  const src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
  return `<script async src="${src}"></script>`;
};

module.exports = getCodepenJs;
