module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node-module/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
