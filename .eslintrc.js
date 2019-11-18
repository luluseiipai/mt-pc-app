module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'space-before-function-paren': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'no-lonely-if': 'off',
    'dot-notation': 'off',
    'standard/no-callback-literal': 'off'
  }
}
