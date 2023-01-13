export default {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: "coverage",
  testEnvironment: "jest-environment-node",
  coverageProvider: "v8",
  transform: {
    '.+\\.ts': 'ts-jest'
  },
};