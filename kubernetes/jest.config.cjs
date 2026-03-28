/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  clearMocks: true,
  moduleFileExtensions: ["ts", "js", "json", "node"],
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "**/?(*.)+(spec|test).ts"
  ],
  testPathIgnorePatterns: ["/node_modules/", ".d.ts", ".js"],
};
