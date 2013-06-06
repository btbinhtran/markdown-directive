
/**
 * Module dependencies.
 */

var directive = require('tower-directive');
var md = require('marked');

/**
 * Expose `markdownDirective`.
 */

module.exports = directive('[type="text/markdown"]', markdownDirective);

/**
 * Define `markdownDirective`.
 */

function markdownDirective(scope, el, attr) {
  // XXX: todo
  el.textContent = marked(el.textContent);
}