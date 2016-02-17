## TypeScript with Webpack

We won't be running `tsc` manually, however. Instead, Webpack's 'ts' loader will do the transpilation during the build:

```javascript
  // webpack.config.js
  ...
  loaders: [
    { test: /\.ts$/, loader: 'ts', exclude: /node_modules/ },
    ...
```
