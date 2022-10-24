'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let sep = String(separator);

    if (separator === undefined) {
      sep = ',';
    }

    for (const ch of this) {
      if (ch === null || ch === undefined) {
        str += '' + sep;
      } else {
        str += String(ch) + sep;
      }
    }

    return str.slice(0, str.length - sep.length);
  };
}

module.exports = applyCustomJoin;
