
/**
 * Module dependencies.
 */

var directive = require('tower-directive');
var md = require('marked');

/**
 * Expose `markdownDirective`.
 */

//module.exports = directive('[type="text/markdown"]', markdownDirective);
module.exports = directive('data-markdown', markdownDirective);

/**
 * Define `markdownDirective`.
 */

function markdownDirective(scope, el, attr) {
  // XXX: todo, expression
  var val = attr.value
    ? scope.get(attr.value)
    : el.textContent;

  if (val) el.innerHTML = md(val);
}