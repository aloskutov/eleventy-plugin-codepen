'use strict';

const {getCodepenUrl, hasHash, hasPath} = require('../src/getCodepenUrl');

describe('Get codepen URL from URL', () => {
  test.each([
    {url: 'https://codepen.io/richpointofview/pen/WNXmNVd', result: 'https://codepen.io/richpointofview/pen/WNXmNVd'},
    {url: 'https://codepen.io/z-/pen/OBPJKK', result: 'https://codepen.io/z-/pen/OBPJKK'},
    {url: 'https://codepen.io/soufiane-khalfaoui-hassani/pen/LYpPWda', result: 'https://codepen.io/soufiane-khalfaoui-hassani/pen/LYpPWda'},
    {url: 'https://codepen.io/yyx990803/pen/XmZNOG', result: 'https://codepen.io/yyx990803/pen/XmZNOG'},
    {url: 'https://codepen.io/sdras/pen/PowKVyN/faca988359f13c8a98d2a6fe81ef43fa', result: 'https://codepen.io/sdras/pen/PowKVyN/faca988359f13c8a98d2a6fe81ef43fa'},
  ])('parseUrl($url)', ({url, result}) => {
    expect(getCodepenUrl(url).href).toMatch(result);
  });
});

describe('hasHash', () => {
  test.each([
    {hash: 'WNXmNVd', result: true},
    {hash: '/abdyPBw', result: false},
    {hash: 'jOmaBQK/', result: false},
    {hash: '/gOXEwpg/', result: false},
    {hash: 'sdras/pen/PowKVyN/faca988359f13c8a98d2a6fe81ef43fa', result: false},
    {hash: 'PowKVyN/faca988359f13c8a98d2a6fe81ef43fa', result: true},
    {hash: 'soufiane-khalfaoui-hassani/pen/LYpPWda/', result: false },
    {hash: '/yyx990803/pen/XmZNOG', result: false },
    {hash: '/abstract_code/pen/vYWQYEK/', result: false }
  ])('hasHash($hash) $result', ({hash, result}) => {
    expect(hasHash(hash)).toBe(result);
  });
});

describe('hasPath', () => {
  test.each([
    { path: 'WNXmNVd', result: false },
    { path: '/abdyPBw', result: false },
    { path: 'jOmaBQK/', result: false },
    { path: '/gOXEwpg/', result: false },
    { path: 'sdras/pen/PowKVyN/faca988359f13c8a98d2a6fe81ef43fa', result: true },
    { path: 'PowKVyN/faca988359f13c8a98d2a6fe81ef43fa', result: false },
    { path: 'soufiane-khalfaoui-hassani/pen/LYpPWda/', result: true },
    { path: 'author/Pen/HaSh/', result: true },
    { path: 'author/pEN/HaSh/', result: true },
    { path: '/yyx990803/pen/XmZNOG', result: false },
    { path: '/abstract_code/pen/vYWQYEK/', result: false }
  ])('hasPath($path) $result', ({ path, result }) => {
    expect(hasPath(path)).toBe(result);
  });
});


describe('Get codepen URL', () => {
  test.each([
    {url: 'WNXmNVd', result: 'https://codepen.io//pen/WNXmNVd'},
    {url: 'abdyPBw', result: 'https://codepen.io//pen/abdyPBw'},
    {url: 'https://codepen.io/sdras/pen/PowKVyN/faca988359f13c8a98d2a6fe81ef43fa', result: 'https://codepen.io/sdras/pen/PowKVyN/faca988359f13c8a98d2a6fe81ef43fa'},
    {url: 'sdras/pen/PowKVyN/faca988359f13c8a98d2a6fe81ef43fa', result: 'https://codepen.io/sdras/pen/PowKVyN/faca988359f13c8a98d2a6fe81ef43fa'},
    {url: 'yyx990803/pen/XmZNOG/', result: 'https://codepen.io/yyx990803/pen/XmZNOG'},
  ])('parseUrl($url) $result', ({url, result}) => {
    expect(getCodepenUrl(url).href).toMatch(result);
  });
});
