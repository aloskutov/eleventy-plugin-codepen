/**
 * Get CodePen url
 * @param {string} url url or slug hash
 * @return {string} codepen url
 */
export default (url) => {
  let gotUrl = url;

  try {
    gotUrl = new URL(gotUrl);
  // eslint-disable-next-line no-unused-vars
  } catch (e) {
    gotUrl = new URL(`https://codepen.io//pen/${gotUrl}`);
  }

  return gotUrl;
};
