module.exports = (eleventyConfig, options = {}) => {

  const defaultCodepen = {
    "tab": "result",    // active tab: result, css or html
    "height": "450",    // iframe height
    "theme": "",        // theme
    "class": "",         // "codepen-resizable" - for resize block
    ...options
  };

  eleventyConfig.addShortcode("codepen_js", () => {
    return `<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`;
  });

  eleventyConfig.addShortcode("codepen", (url, params) => {
    let tmpUrl;

    try {
      tmpUrl = new URL(url).pathname;
    } catch(e) {
      if (e instanceof TypeError) {
        tmpUrl = new URL("https://codepen.io//pen/" + url).pathname;
      }
    }

    const path = tmpUrl;
    const id = path.split('/')[3];

    if (typeof params === `string` ) {
      if ((params[0] === '{') && (params[params.length - 1] === '}')) {
        params = JSON.parse(params);
      } else {
        let tmpOpts = {};
        params.split(';').map(option => {
          let pair = option.split(':');
          tmpOpts[pair[0]] = pair[1];
        });
        params = tmpOpts;
      }
    }

    const options = Object.assign({}, defaultCodepen, params);

    return `<p class="codepen"
      data-class="${options.class}"
      data-height="${options.height}"
      data-theme-id="${options.theme}"
      data-default-tab="${options.tab}"
      data-slug-hash="${id}">
    <span><a href="${url}">See the Pen </a></span></p>`;
  });

  return {
//    markdownTemplateEngine: "njk",
  };
};
