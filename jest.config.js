module.exports = {
    moduleFileExtensions: ['js', 'jsx','ts', 'tsx', 'json', 'node'],
    testMatch: ['<rootDir>/tests/**/*.test.{js,jsx,ts,tsx}'],
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}'
    ],
    coverageDirectory: 'coverage',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
  };