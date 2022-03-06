module.exports = {
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],
  errorOnDeprecated: true,
  verbose: true,
};
