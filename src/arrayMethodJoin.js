'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let line = '';

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (this[i] === undefined || this[i] === null) {
        item = '';
      }

      if (i === 0) {
        line += item;
        continue;
      }

      line += String(separator) + item;
    }

    return line;
  };
}

module.exports = applyCustomJoin;
