'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var module$1 = require('module');
var prettier = require('prettier');
var synckit = require('synckit');

var require$1 = (
			false
				? /* @__PURE__ */ module$1.createRequire((typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('index.cjs', document.baseURI).href)))
				: require
		);

const LANGUAGE = "toml";
const PARSER = "taplo";
const AST_NAME = "taplo-ast";
const { group } = prettier.doc.builders;
const format = synckit.createSyncFn(require$1.resolve("./worker.cjs"));
function removeBeginningTrailingNewline(code) {
  code = code.replace(/^(?:\r?\n)+/, "");
  code = code.replace(/(?:\r?\n)+$/, "");
  return code;
}
const parse = (code) => ({
  type: "Program",
  code,
  loc: { start: 0, end: code.length },
  range: [0, code.length],
  body: [],
  comments: [],
  tokens: []
});
const print = (path) => {
  const { code } = path.node;
  const formatted = format(removeBeginningTrailingNewline(code));
  return group([formatted]);
};
const languages = [
  {
    name: LANGUAGE,
    parsers: [PARSER]
  }
];
const parsers = {
  [PARSER]: {
    parse,
    astFormat: AST_NAME
  }
};
const printers = {
  [AST_NAME]: {
    print
  }
};

exports.languages = languages;
exports.parsers = parsers;
exports.printers = printers;
