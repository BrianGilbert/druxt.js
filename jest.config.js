module.exports = {
  collectCoverage: true,
  coverageDirectory: './coverage/',
  moduleFileExtensions: ['js', 'json', 'vue'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js)$': 'esbuild-jest',
    '^.+\\.(vue)$': 'vue-jest'
  }
}