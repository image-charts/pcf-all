module.exports = {
  testEnvironment: 'node',
  testTimeout: 30000,
  verbose: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: [
    '**/test.js',
    '**/test.integration.js'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/out/',
    '/Solutions/'
  ],
  reporters: ['default']
};
