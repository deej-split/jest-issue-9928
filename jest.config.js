module.exports = {
  testURL: 'http://localhost/',
  rootDir: '.',
  collectCoverageFrom: ['src/**/*.js'],
  setupFilesAfterEnv: [
    '<rootDir>/config/jestCustomMatchers.js',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  "transform": {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
};
