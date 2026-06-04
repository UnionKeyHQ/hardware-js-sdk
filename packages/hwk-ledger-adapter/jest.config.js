module.exports = {
  preset: '../../jest.config.js',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['node_modules', '<rootDir>/dist'],
  moduleNameMapper: {
    '^@unionkeyfe/hwk-adapter-core$': '<rootDir>/../hwk-adapter-core/src/index.ts',
  },
};
