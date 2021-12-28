'use strict';

const test = require('ava');
const parseParams = require('../src/parseParams');

test('Empty string', (t) => {
  const params = '';
  t.deepEqual(parseParams(params), {});
});

test('Null', (t) => {
  const params = null;
  t.deepEqual(parseParams(params), {});
});

test('undefined', (t) => {
  const params = undefined;
  t.deepEqual(parseParams(params), {});
});

test('JSON', (t) => {
  const params = {'height': 650, 'class': 'codepen-resizable', 'theme': 'light', 'tab': 'js,result'};
  t.deepEqual(parseParams(params), {
    'height': 650,
    'class': 'codepen-resizable',
    'theme': 'light',
    'tab': `js,result`,
  });
});

test('Parameters string', (t) => {
  const params = 'height:600;theme:light;class:codepen-resizable';
  t.deepEqual(parseParams(params), {
    'height': '600',
    'theme': 'light',
    'class': 'codepen-resizable',
  });
});

test('Parameters JSON string', (t) => {
  const params = '{"height":650, "class":"codepen-resizable", "theme": "light", "tab":"js,result"}';
  t.deepEqual(parseParams(params), {
    'height': 650,
    'class': 'codepen-resizable',
    'theme': 'light',
    'tab': `js,result`,
  });
});

test('Throw SyntaxError', (t) => {
  const params = '{height: 650, class: codepen-resizable, theme: light, tab: js,result}';
  t.throws(() => {
    parseParams(params);
  }, {instanceOf: SyntaxError});
});
