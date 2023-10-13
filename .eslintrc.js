module.exports = {
  parserOptions: {
    sourceType: "module", // Add this line
  },
  parser: 'babel-eslint',
  extends: ['react-app'],
  rules: {
    'react/jsx-no-target-blank': 'warn', // Treat this as a warning, not an error
    // Add other rules as needed
  },
};
