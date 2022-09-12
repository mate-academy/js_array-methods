'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let sep;
    let arg;

    if (separator === null) {
      sep = 'null';
    } else {
      sep = separator;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        arg = '';
      } else {
        arg = this[i];
      }

      if (i < this.length - 1) {
        result += arg + sep;
      } else {
        result += arg;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
