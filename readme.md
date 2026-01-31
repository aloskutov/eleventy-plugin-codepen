# eleventy-plugin-codepen
![npm](https://img.shields.io/npm/v/@aloskutov/eleventy-plugin-codepen)
![npms.io (quality)](https://img.shields.io/npms-io/maintenance-score/@aloskutov/eleventy-plugin-codepen)
![npms.io (quality)](https://img.shields.io/npms-io/quality-score/@aloskutov/eleventy-plugin-codepen)
![GitHub](https://img.shields.io/github/license/aloskutov/eleventy-plugin-codepen)
[![DeepScan grade](https://deepscan.io/api/teams/16410/projects/19673/branches/514386/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=16410&pid=19673&bid=514386)

[![DeepSource](https://deepsource.io/gh/aloskutov/eleventy-plugin-codepen.svg/?label=active+issues&show_trend=true&token=QqgB3VzCD1eg8QWoGUFYvV1j)](https://deepsource.io/gh/aloskutov/eleventy-plugin-codepen/?ref=repository-badge)
[![DeepSource](https://deepsource.io/gh/aloskutov/eleventy-plugin-codepen.svg/?label=resolved+issues&show_trend=true&token=QqgB3VzCD1eg8QWoGUFYvV1j)](https://deepsource.io/gh/aloskutov/eleventy-plugin-codepen/?ref=repository-badge)

Just another eleventy codepen plugin.

## Usage

### Install via npm

```shell
npm install @aloskutov/eleventy-plugin-codepen
```

### Load plugin in `.eleventy.js` as ESM

```js
import codepen from "@aloskutov/eleventy-plugin-codepen";

export default function (eleventyConfig) => {
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
