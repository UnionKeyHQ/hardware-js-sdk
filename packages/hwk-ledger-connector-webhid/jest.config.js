module.exports = {
  preset: '../../jest.config.js',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['node_modules', '<rootDir>/dist'],
  moduleNameMapper: {
    '^@unionkeyfe/hwk-ledger-adapter$': '<rootDir>/../hwk-ledger-adapter/src/index.ts',
    '^@unionkeyfe/hwk-adapter-core$': '<rootDir>/../hwk-adapter-core/src/index.ts',
  },
};
