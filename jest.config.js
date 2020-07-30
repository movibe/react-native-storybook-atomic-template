module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['./__mocks__/mockFirebase'],
  automock: false,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  rootDir: '.',
  roots: ['src'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@codler/react-native-keyboard-aware-scroll-view|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: 'reports/',
        outputName: 'jest-report.xml',
      },
    ],
  ],
  coverageDirectory: 'reports/',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/android/',
    '<rootDir>/ios/',
    '<rootDir>/lib/',
    '<rootDir>/reports/',
    '<rootDir>/dist/',
    'babel.config.js',
    'metro.config.js',
  ],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/android/',
    '<rootDir>/ios/',
    '<rootDir>/lib/',
    '<rootDir>/reports/',
    '<rootDir>/dist/',
  ],
}
