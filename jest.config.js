module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleNameMapper: {
    "^layout(.*)$": "<rootDir>/layout$1",
    "^components(.*)$": "<rootDir>/components$1"
  }
};
