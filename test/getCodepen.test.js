'use strict';

const { getCodepenHtml } = require('../src/getCodepen');

const options = {
  'tab': 'result',
  'height': 450,
  'theme': '',
  'class': '',
  'insertJS': false,
};

describe('Get codepen html', () => {
  test('Test #1 with URL', () => {
    const url = 'https://codepen.io/gayane-gasparyan/pen/jOmaBQK';
    const result = `<p class="codepen"
  data-class="${options.class}"
  data-height="${options.height}"
  data-theme-id="${options.theme}"
  data-default-tab="${options.tab}"
  data-slug-hash="jOmaBQK">
  <span><a href="${url}">See the Pen </a></span></p>`;
    expect(getCodepenHtml(options, url)).toBe(result);
  });

  test('Test #2 with SlugHash', () => {
    const slugHash = 'jOmaBQK';
    const url = 'https://codepen.io//pen/jOmaBQK';
    const result = `<p class="codepen"
  data-class="${options.class}"
  data-height="${options.height}"
  data-theme-id="${options.theme}"
  data-default-tab="${options.tab}"
  data-slug-hash="jOmaBQK">
  <span><a href="${url}">See the Pen </a></span></p>`;
    expect(getCodepenHtml(options, slugHash)).toBe(result);
  });

  test('Test #3 with JS', () => {
    const slugHash = 'jOmaBQK';
    options.insertJS = true;
    const url = 'https://codepen.io//pen/jOmaBQK';
    const result = `<p class="codepen"
  data-class="${options.class}"
  data-height="${options.height}"
  data-theme-id="${options.theme}"
  data-default-tab="${options.tab}"
  data-slug-hash="jOmaBQK">
  <span><a href="${url}">See the Pen </a></span></p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`;
    expect(getCodepenHtml(options, slugHash)).toBe(result);
  });

  test('Test #4 Throw Error empty options & url', () =>{
    expect(() => getCodepenHtml()).toThrow(TypeError);
  });

  test('Test #5 Throw Error empty url', () =>{
    expect(() => getCodepenHtml(options)).toThrow(TypeError);
  });
});
