'use strict';

const getCodepenJs = require('../src/getCodepenJs');
const codeString = '<script async src="https://public.codepenassets.com/embed/index.js"></script>';

describe('Get codepen JS', () => {
  test('Get code string', () => {
    expect(getCodepenJs()).toBe(codeString);
  });
});
