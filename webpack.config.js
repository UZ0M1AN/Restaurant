const path = require('path');

module.exports = {
  entry: './src/script.js',
  output: {
    filename: 'uzomian.js',
    path: path.resolve(__dirname, 'dist'),
  },
};