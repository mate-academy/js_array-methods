'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let joined = '';
    let separ = ',';

    if (!(separator === undefined)) {
      separ = separator + '';
    }

    if (!(this[0] === null || this[0] === undefined)) {
      joined = this[0] + '';
    }

    if (this.length === 1) {
      return joined;
    }

    for (let i = 1; i < this.length; i++) {
      let nextItem = '';

      if (this[i] === null || this[i] === undefined) {
        nextItem = '';
      } else {
        nextItem = this[i] + '';
      }

      joined = joined + separ + nextItem;
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
