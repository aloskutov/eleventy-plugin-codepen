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
  test('Test #1 URL', () => {
    const hash = 'jOmaBQK';
    const user = 'gayane-gasparyan';
    const url = 'https://codepen.io/gayane-gasparyan/pen/jOmaBQK';
    const result = `<p class="codepen"
  data-class="${options.class}"
  data-height="${options.height}"
  data-theme-id="${options.theme}"
  data-default-tab="${options.tab}"
  data-slug-hash="${hash}"
  data-user="${user}">
  <span><a href="${url}">See the Pen </a></span></p>`;
    expect(getCodepenHtml(options, url)).toBe(result);
  });

  test('Test #2 hash', () => {
    const hash = 'jOmaBQK';
    const url = 'https://codepen.io//pen/jOmaBQK';
    const result = `<p class="codepen"
  data-class="${options.class}"
  data-height="${options.height}"
  data-theme-id="${options.theme}"
  data-default-tab="${options.tab}"
  data-slug-hash="${hash}">
  <span><a href="${url}">See the Pen </a></span></p>`;
    expect(getCodepenHtml(options, hash)).toBe(result);
  });

  test('Test #3 hash with JS', () => {
    const hash = 'jOmaBQK';
    options.insertJS = true;
    const url = 'https://codepen.io//pen/jOmaBQK';
    const result = `<p class="codepen"
  data-class="${options.class}"
  data-height="${options.height}"
  data-theme-id="${options.theme}"
  data-default-tab="${options.tab}"
  data-slug-hash="${hash}">
  <span><a href="${url}">See the Pen </a></span></p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>`;
    expect(getCodepenHtml(options, hash)).toBe(result);
  });

  test('Test #4 Throw Error empty options & url', () =>{
    expect(() => getCodepenHtml()).toThrow(TypeError);
  });

  test('Test #5 Throw Error empty url', () =>{
    expect(() => getCodepenHtml(options)).toThrow(TypeError);
  });

  test('Test #6 URL with long slug hash', () => {
    const url = 'https://codepen.io/sdras/pen/PowKVyN/faca988359f13c8a98d2a6fe81ef43fa';
    const hash = 'PowKVyN/faca988359f13c8a98d2a6fe81ef43fa';
    const user = 'sdras';
    options.insertJS = false;
    const result = `<p class="codepen"
  data-class="${options.class}"
  data-height="${options.height}"
  data-theme-id="${options.theme}"
  data-default-tab="${options.tab}"
  data-slug-hash="${hash}"
  data-user="${user}">
  <span><a href="${url}">See the Pen </a></span></p>`;
    expect(getCodepenHtml(options, url)).toBe(result);
  });
});
