# 프로젝트 내 Webpack 도움될만한 참고요소

1. WebpackManifestPlugin

```js
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

new WebpackManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath: paths.publicUrlOrPath,
        generate: (seed, files, entrypoints) => {
          const manifestFiles = files.reduce((manifest, file) => {
            manifest[file.name] = file.path;
            return manifest;
          }, seed);
          const entrypointFiles = entrypoints.main.filter(
            fileName => !fileName.endsWith('.map')
          );

          return {
            files: manifestFiles,
            entrypoints: entrypointFiles,
          };
        },
      }),
```

Webpack-manifest-plugin 사용으로 assets-manifest.json 생성

```json
{
  "files": {
    "main.css": "/static/css/main.f855e6bc.css",
    "main.js": "/static/js/main.fcfe9346.js",
    "static/js/787.7c72fb5f.chunk.js": "/static/js/787.7c72fb5f.chunk.js",
    "static/media/logo.svg": "/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg",
    "index.html": "/index.html",
    "main.f855e6bc.css.map": "/static/css/main.f855e6bc.css.map",
    "main.fcfe9346.js.map": "/static/js/main.fcfe9346.js.map",
    "787.7c72fb5f.chunk.js.map": "/static/js/787.7c72fb5f.chunk.js.map"
  },
  "entrypoints": ["static/css/main.f855e6bc.css", "static/js/main.fcfe9346.js"]
}
```

이런식으로 생성

2. SplitChunksPlugin

```js
optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },
```

정적, 동적 옵션 따지지 않고 공통 모듈은 따로 빼는 옵션, 추가해서 사용해보자
