'use strict';

module.exports = function inline(state) {
  var tokens = state.tokens, tok, i, l;

  // Parse inlines
  for (i = 0, l = tokens.length; i < l; i++) {
    tok = tokens[i];
    if (tok.type === 'inline') {
      state.inline.parse(tok.content, state.options, state.env, tok.children);
      var j, cl;
      for (j = 0, cl = tok.children.length; j < cl; j++) {
        tok.children[j].pos += tok.pos
      }
    }
  }
};
