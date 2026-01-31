/**
 * Parse param string
 * @param {string} str
 * @return {object}
 */
export const parseString = (str) => {
  const options = {};

  str.split(';').forEach((pair) => {
    const [key, value] = pair.split(':');
    options[key.trim()] = value.trim();
  });

  return options;
};

/**
 * is JSON?
 * @param {string} str
 * @return {boolean}
 */
export const isJSON = (str) => {
  const cleanStr = str.trim();
  return (cleanStr[0] === '{') && (cleanStr[cleanStr.length -1] === '}');
};

/**
 * Parse params string
 * @param {string} params parameters string
 * @return {object} parsed parameters object
 */
export default (params) => {
  let cleanParams = params ? params : {};

  if (typeof cleanParams === 'string' ) {
    cleanParams = isJSON(cleanParams) ?
      JSON.parse(cleanParams) :
      parseString(cleanParams);
  }
  return cleanParams;
};
