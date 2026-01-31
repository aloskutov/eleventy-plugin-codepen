/**
 * Get Codepen JS code
 * @return {string} codepen script code
 */
export default () => {
  const src = 'https://public.codepenassets.com/embed/index.js';
  return `<script async src="${src}"></script>`;
};
