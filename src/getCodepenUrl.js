'use strict';

const getCodepenUrl = (url) => {
  let gotUrl = url;

  try {
    gotUrl = new URL(gotUrl);
  } catch (e) {
    if (e instanceof TypeError) {
      gotUrl = new URL(`https://codepen.io//pen/${gotUrl}`);
    }
  }

  return gotUrl;
};

module.exports = getCodepenUrl;
