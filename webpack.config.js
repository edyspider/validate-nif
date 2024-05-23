const path = require('path');

module.exports = {
  entry: './src/index.js',  // Adjust this to your entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    library: '@edyspider/validate-nif',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  externals: {
    // Add any dependencies you want to exclude from the bundle here
    // For example: react: 'React'
  },
};
