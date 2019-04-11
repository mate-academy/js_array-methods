'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(token = ',') {
    let str = '';
    let addToken = String(token);
    if (token === null) {
      addToken = String(null);
    }
    for (let i = 0; i < this.length; i++) {
      if (
        this[i] === null
        || this[i] === undefined // eslint-disable-line
      ) {
        str += addToken;
        continue;
      }
      if (i === this.length - 1) {
        str += this[i];
        return str;
      }
      str += this[i] + addToken;
    }
    return str;
  };
}

module.exports = applyCustomJoin;
