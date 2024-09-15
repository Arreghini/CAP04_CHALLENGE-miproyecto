const nextJest = require('next/jest');

// Providing the path to your Next.js app to load next.config.js and .env files in your test environment
const createJestConfig = nextJest({
  dir: './', // this is the 'rootDir' and should point to the root of your Next.js project
});

const customJestConfig = {
  rootDir: './',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/jest.config.js'],

  modulePathIgnorePatterns: ['<rootDir>/jest.config.js'],
};

module.exports = createJestConfig(customJestConfig);
