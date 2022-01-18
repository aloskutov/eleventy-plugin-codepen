'use strict';

const test = require('ava');
const parseParams = require('../src/parseParams');


test('Empty string', (t) => {
  t.deepEqual(parseParams(''), {});
});

test('Null', (t) => {
  t.deepEqual(parseParams(null), {});
});

test('undefined', (t) => {
  t.deepEqual(parseParams(), {});
});

test('Object', (t) => {
  const params = {'height': 650, 'class': 'codepen-resizable', 'theme': 'light', 'tab': 'js,result'};
  t.deepEqual(parseParams(params), params);
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
  const params = {'height': 650, 'class': 'codepen-resizable', 'theme': 'light', 'tab': 'js,result'};
  t.deepEqual(parseParams(JSON.stringify(params)), params);
});

test('Throw SyntaxError', (t) => {
  const params = '{height: 650, class: codepen-resizable, theme: light, tab: js,result}';
  t.throws(() => {
    parseParams(params);
  }, {instanceOf: SyntaxError});
});
