module.exports = {
  parserOptions: {
    sourceType: "module", // Specifies that your code uses ES Modules
  },
  extends: ['react-app'],
  rules: {
    'react/jsx-no-target-blank': 'warn', // Treat this as a warning, not an error
    // Add other rules as needed
  },
};
