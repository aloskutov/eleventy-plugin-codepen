# eleventy-plugin-codepen
![npm](https://img.shields.io/npm/v/@aloskutov/eleventy-plugin-codepen)
![npms.io (quality)](https://img.shields.io/npms-io/maintenance-score/@aloskutov/eleventy-plugin-codepen)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/@aloskutov/eleventy-plugin-codepen)
![GitHub](https://img.shields.io/github/license/aloskutov/eleventy-plugin-codepen)

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

To add Codepen's javascript code to all pages, paste in the template:

```html
...
{% codepen_js %}
    </body>
</html>
```

To optionally add Codepen's javascript code to all pages, paste in the template:

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

{% codepen "pen-url", '{"option":"value"}' %}

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
{% codepen "some-pen-url-or-id", '{"style":"codepen-resizable"}' %}
```

### Notes

**Liquid** & **Nunjucks** template:

```md
{% codepen "some-pen-url-or-id", '{"height":500,"style":"codepen-resizable"}' %}

or option string

{% codepen "some-pen-url-or-id", "height:500,style:codepen-resizable" %}
```

**Nunjucks** template:

```md
{% codepen "some-pen-url-or-id", {height:500, style:"codepen-resizable"} %}

```
