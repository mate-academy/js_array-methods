'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let sep = '';

    for (let item of this) {
      item = item === undefined ? '' : item;
      item = item === null ? '' : item;
      str += sep + item;
      sep = String(separator);
    }

    return str;
  };
}

module.exports = applyCustomJoin;
