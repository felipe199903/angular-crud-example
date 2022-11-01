const { defaults } = require("jest-config");
module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
};