const config = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js, ts}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: 'reports/jest',
        outputName: 'js-test-results.xml',
        classNameTemplate: '{classname}-{title}',
        titleTemplate: '{classname}-{title}',
        ancestorSeparator: ' › ',
      },
    ],
  ],
};

module.exports = config;