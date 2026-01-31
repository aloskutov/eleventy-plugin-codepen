
import getSlugHash from '../src/getSlugHash.js';

describe('Get slug hash from codepen URL', () => {
  test.each([
    {url: '/richpointofview/pen/WNXmNVd', result: 'WNXmNVd'},
    {url: '/z-/pen/OBPJKK', result: 'OBPJKK'},
  ])('parseUrl($url)', ({url, result}) => {
    expect(getSlugHash(url)).toBe(result);
  });
});
