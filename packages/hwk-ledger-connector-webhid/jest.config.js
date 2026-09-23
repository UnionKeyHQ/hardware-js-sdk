module.exports = {
  preset: '../../jest.config.js',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['node_modules', '<rootDir>/dist'],
  moduleNameMapper: {
    '^@unionkeyhq/hwk-ledger-adapter$': '<rootDir>/../hwk-ledger-adapter/src/index.ts',
    '^@unionkeyhq/hwk-adapter-core$': '<rootDir>/../hwk-adapter-core/src/index.ts',
  },
};
