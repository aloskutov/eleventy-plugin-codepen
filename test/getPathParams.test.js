'use strict';

const { getPathParams } = require('../src/getPathParams');

describe('Get slug hash from codepen URL', () => {
  test.each([
    {url: '/richpointofview/pen/WNXmNVd', result: 'WNXmNVd'},
    {url: '/isladjan/pen/abdyPBw', result: 'abdyPBw'},
    {url: '/gayane-gasparyan/pen/jOmaBQK', result: 'jOmaBQK'},
    {url: '/MarkBoots/pen/gOXEwpg', result: 'gOXEwpg'},
    {url: '/abxlfazl/pen/VwKzaEm', result: 'VwKzaEm'},
    {url: '/TurkAysenur/pen/ZEpxeYm', result: 'ZEpxeYm'},
    {url: '/argyleink/pen/poEjvpd', result: 'poEjvpd'},
    {url: '/abstract_code/pen/vYWQYEK', result: 'vYWQYEK'},
    {url: '/z-/pen/OBPJKK', result: 'OBPJKK'},
    {url: '/soufiane-khalfaoui-hassani/pen/LYpPWda', result: 'LYpPWda'},
    {url: '/yyx990803/pen/XmZNOG', result: 'XmZNOG'},
    {url: '/sdras/pen/PowKVyN/faca988359f13c8a98d2a6fe81ef43fa', result: 'PowKVyN/faca988359f13c8a98d2a6fe81ef43fa'},
  ])('getPathParams($url)', ({url, result}) => {
    expect(getPathParams(url).hash).toBe(result);
  });
});

describe('Get user from codepen URL', () => {
  test.each([
    { url: '/richpointofview/pen/WNXmNVd', result: 'richpointofview' },
    { url: '/isladjan/pen/abdyPBw', result: 'isladjan' },
    { url: '/gayane-gasparyan/pen/jOmaBQK', result: 'gayane-gasparyan' },
    { url: '/MarkBoots/pen/gOXEwpg', result: 'MarkBoots' },
    { url: '/TurkAysenur/pen/ZEpxeYm', result: 'TurkAysenur' },
    { url: '/z-/pen/OBPJKK', result: 'z-' },
    { url: '/soufiane-khalfaoui-hassani/pen/LYpPWda', result: 'soufiane-khalfaoui-hassani' },
    {
      url: '/sdras/pen/PowKVyN/faca988359f13c8a98d2a6fe81ef43fa',
      result: 'sdras'
    }
  ])('getPathParams($url)', ({ url, result }) => {
    expect(getPathParams(url).user).toBe(result);
  });
});
