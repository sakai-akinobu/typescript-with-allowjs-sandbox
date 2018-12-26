# typescript-with-allowjs-sandbox

```
npm run build

> typescript-with-allowjs-sandbox@1.0.0 build /Users/nobyu/git/typescript-with-allowjs-sandbox
> npx webpack --config webpack.config.js

Hash: 84aa5965dbc76308e56c
Version: webpack 4.28.2
Time: 1367ms
Built at: 2018-12-26 19:31:12
    Asset      Size  Chunks             Chunk Names
bundle.js  4.35 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./src/foo.js] 57 bytes {main} [built]
[./src/index.ts] 93 bytes {main} [built] [1 error]

ERROR in /Users/nobyu/git/typescript-with-allowjs-sandbox/src/index.ts
./src/index.ts
[tsl] ERROR in /Users/nobyu/git/typescript-with-allowjs-sandbox/src/index.ts(1,17)
      TS2306: File '/Users/nobyu/git/typescript-with-allowjs-sandbox/src/foo.js' is not a module.
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! typescript-with-allowjs-sandbox@1.0.0 build: `npx webpack --config webpack.config.js`
npm ERR! Exit status 2
npm ERR!
npm ERR! Failed at the typescript-with-allowjs-sandbox@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/nobyu/.npm/_logs/2018-12-26T10_31_12_363Z-debug.log
```
