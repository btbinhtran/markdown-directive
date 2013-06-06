var towerMarkdownDirective = 'undefined' == typeof window
  ? require('..')
  : require('tower-markdown-directive'); // how to do this better?

var assert = require('assert');

describe('towerMarkdownDirective', function(){
  it('should test', function(){
    assert.equal(1 + 1, 2);
  });
});
