'use strict';

var lib = require('@taplo/lib');
var synckit = require('synckit');

let taplo = null;
synckit.runAsWorker(async (code) => {
  if (!taplo) {
    taplo = await lib.Taplo.initialize();
  }
  return taplo.format(code);
});
