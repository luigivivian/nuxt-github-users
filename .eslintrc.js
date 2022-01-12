module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': ['error', {
      'ignores': [
        'pages/**/*.vue',
        'pages/**/**/*.vue',
        'pages/**/**/**/*.vue',
        'store/**/*.js',
        'layouts/*.vue',
        'layouts/**/*.vue',
        'pages/'
      ]
    }]
  },
  overrides: [
    {
      files: [
        'pages/**/*.vue',
        'pages/**/**/*.vue',
        'pages/**/**/**/*.vue',
        'store/**/*.js',
        'layouts/*.vue',
        'layouts/**/*.vue',
        'pages/'
      ],
      rules: {
        'vue/multi-word-component-names': ['error', {
          'ignores': ['default']
        }],
      },
    },
  ],
}
