'use strict';

const getCodepenUrl = require('../src/getCodepenUrl');

describe('Get codepen URL from URL', () => {
  test.each([
    {url: 'https://codepen.io/richpointofview/pen/WNXmNVd', result: 'https://codepen.io/richpointofview/pen/WNXmNVd'},
    {url: 'https://codepen.io/isladjan/pen/abdyPBw', result: 'https://codepen.io/isladjan/pen/abdyPBw'},
    {url: 'https://codepen.io/gayane-gasparyan/pen/jOmaBQK', result: 'https://codepen.io/gayane-gasparyan/pen/jOmaBQK'},
    {url: 'https://codepen.io/MarkBoots/pen/gOXEwpg', result: 'https://codepen.io/MarkBoots/pen/gOXEwpg'},
    {url: 'https://codepen.io/abxlfazl/pen/VwKzaEm', result: 'https://codepen.io/abxlfazl/pen/VwKzaEm'},
    {url: 'https://codepen.io/TurkAysenur/pen/ZEpxeYm', result: 'https://codepen.io/TurkAysenur/pen/ZEpxeYm'},
    {url: 'https://codepen.io/argyleink/pen/poEjvpd', result: 'https://codepen.io/argyleink/pen/poEjvpd'},
    {url: 'https://codepen.io/abstract_code/pen/vYWQYEK', result: 'https://codepen.io/abstract_code/pen/vYWQYEK'},
    {url: 'https://codepen.io/z-/pen/OBPJKK', result: 'https://codepen.io/z-/pen/OBPJKK'},
    {url: 'https://codepen.io/soufiane-khalfaoui-hassani/pen/LYpPWda', result: 'https://codepen.io/soufiane-khalfaoui-hassani/pen/LYpPWda'},
    {url: 'https://codepen.io/yyx990803/pen/XmZNOG', result: 'https://codepen.io/yyx990803/pen/XmZNOG'},
    {url: 'https://codepen.io/sdras/pen/PowKVyN/faca988359f13c8a98d2a6fe81ef43fa', result: 'https://codepen.io/sdras/pen/PowKVyN/faca988359f13c8a98d2a6fe81ef43fa'},
  ])('parseUrl($url)', ({url, result}) => {
    expect(getCodepenUrl(url).href).toMatch(result);
  });
});

describe('Get codepen URL from Hash', () => {
  test.each([
    {url: 'WNXmNVd', result: 'https://codepen.io//pen/WNXmNVd'},
    {url: 'abdyPBw', result: 'https://codepen.io//pen/abdyPBw'},
    {url: 'jOmaBQK', result: 'https://codepen.io//pen/jOmaBQK'},
    {url: 'gOXEwpg', result: 'https://codepen.io//pen/gOXEwpg'},
    {url: 'VwKzaEm', result: 'https://codepen.io//pen/VwKzaEm'},
    {url: 'ZEpxeYm', result: 'https://codepen.io//pen/ZEpxeYm'},
    {url: 'poEjvpd', result: 'https://codepen.io//pen/poEjvpd'},
    {url: 'vYWQYEK', result: 'https://codepen.io//pen/vYWQYEK'},
    {url: 'OBPJKK',  result: 'https://codepen.io//pen/OBPJKK'},
    {url: 'LYpPWda', result: 'https://codepen.io//pen/LYpPWda'},
    {url: 'XmZNOG',  result: 'https://codepen.io//pen/XmZNOG'},
  ])('parseUrl($url) $result', ({url, result}) => {
    expect(getCodepenUrl(url).href).toMatch(result);
  });
});
