module.exports = {
  preset: 'ts-jest',
  setupFiles: ["./jest.setup.js"],
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest'
  },
  transformIgnorePatterns: [],
  testMatch: ['**/src/**/*.spec.ts'],
  testEnvironment: 'node',
};
