# Node Native Apps Playground

A personal playground for [NW.js](http://nwjs.io/) and [Electron](http://electron.atom.io/).

## Install

Require NW.js (just download the binary from [nwjs.io](http://nwjs.io/)) and Electron (`npm i -g electron-prebuilt`). Assume they are both in PATH.

## Debug

```sh
$ tree
.
├── common
│   └── ...
├── electron
│   ├── common -> ../common
│   └── ...
├── nw
│   ├── common -> ../common
│   └── ...
└── ...
$ electron electron
...
$ nw nw
...
```
