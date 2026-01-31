/**
 * Get slug hash from path
 * @param {string} path
 * @return {string}
 */
export default (path) => {
  const regex =  /^\/(?<author>[\w\u002d]{0,127})\/pen\/(?<slug>\w{1,127})(?:\/(?<hash>\w{1,127})){0,1}\w{0,127}$/ui;
  const matches = regex.exec(path);

  return matches.groups.hash ? matches.groups.hash : matches.groups.slug ;
};
