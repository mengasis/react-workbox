module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-key': 2,
  },
}
