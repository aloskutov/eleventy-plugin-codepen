'use strict';

const getCodepenJs = require('../src/getCodepenJs');
const codeString = `<script async src=\"https://cpwebassets.codepen.io/assets/embed/ei.js\"></script>`;

describe('Get codepen JS', () => {
  test('Get code string', () => {
    expect(getCodepenJs()).toBe(codeString);
  });
});
