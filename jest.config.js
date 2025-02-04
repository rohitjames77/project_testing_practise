module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.mjs$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|mjs)$',
    moduleFileExtensions: ['js', 'jsx', 'mjs'],
    transformIgnorePatterns: [
      '/node_modules/(?!your-es-module-dependency)/'
    ],

  };