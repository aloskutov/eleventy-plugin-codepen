'use strict';

/**
 * Get Codepen JS code
 * @return {string} codepen script code
 */
const getCodepenJs = () => {
  const src = 'https://public.codepenassets.com/embed/index.js';
  return `<script async src="${src}"></script>`;
};

module.exports = getCodepenJs;
