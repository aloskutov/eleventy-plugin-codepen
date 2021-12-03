# eleventy-plugin-codepen

Just another eleventy codepen plugin.

## Usage

### Install via npm

```shell
npm install --save-dev @aloskutov/eleventy-plugin-codepen
```

### Load plugin in `.eleventy.js`

```js
const codepen = require("@aloskutov/eleventy-plugin-codepen");

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(codepen);
};
```

### Add CodePen js-library

To add Codepen's javascript code to all pages, paste in the template (Nunjucks):

```html
...
{% codepen_js %}
    </body>
</html>
```

To optionally add Codepen's javascript code to all pages, paste in the template (Nunjucks):

```html
...
{% if codepen %}{% codepen_js %}{% endif %}
    </body>
</html>
```

If you use optional, then on the content page, insert in the header `codepen: true`:

```md
---
codepen: true
...
---

...
{% codepen "pen-url", {options} %}
...
```


### Custom options

| Option    | Type    | Default |        |
|-----------|---------|---------|--------|
| height    | integer | 450     | Iframe height in pixels |
| tab       | string  | result  | Active tab. Possible values: `result`, `html`, `css`, `js`. |
| theme     | string  | dark    | Theme, `dark`, `light` or theme id |
| class     | string  | none    | CSS class (classes) to add to the iframe |


### Codepen custom style

For example, custom style for resizable block:

```css
  .codepen-resizable {
    overflow: hidden;
    resize: both;
    background: white;
    padding-bottom: 10px;
  }

.codepen-resizable iframe {
    height: 100% !important;
}
```

```md
{% codepen "some-pen-url-or-id", {style:"codepen-resizable"} %}
```

### Notes

If you are using markdown, be sure to add 11ty configuration option `markdownTemplateEngine: "njk",`

```js
module.exports = (eleventyConfig, options = {}) => {
    ...
      return {
          ...
    markdownTemplateEngine: "njk",
  };
};
```
