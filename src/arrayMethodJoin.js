'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let sep = separator;

    if (separator === undefined) {
      sep = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        str += '' + sep;
      } else {
        str += this[i] + sep;
      }
    }

    return str.substring(0, (str.length - sep.length));
  };
}

module.exports = applyCustomJoin;
