'use strict';

const getSlugHash = require('../src/getSlugHash');

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
  ])('parseUrl($url)', ({url, result}) => {
    expect(getSlugHash(url)).toBe(result);
  });
});
