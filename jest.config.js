

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,css}',     // Include all TypeScript/React files in src
    'public/**/*.{ts,tsx,css,html}',   // Include all TypeScript/React files in pubclic
    'schoology_php/**/*.{php}',   // Include all TypeScript/React files in schoology_php
    '**/*.js',               // Include all JavaScript files
    '**/*.jsx',              // Include all JSX files
    '**/*.css',              // Include all CSS files
    '**/*.json'              // Include all JSON files
  ],
  testPathIgnorePatterns: ['/node_modules/'], //, '/dist/'
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Mock CSS imports
    '\\.json$': 'json5-loader'                       // Mock JSON imports
  },
};

