'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';
    const separ = separator + '';

    for (let i = 0; i < this.length; i++) {
      let nextItem = '';

      if (!(this[i] === null || this[i] === undefined)) {
        nextItem = this[i] + '';
      }

      if (this.length > 1 && i !== this.length - 1) {
        joined = joined + nextItem + separ;
      } else if (this.length >= 1) {
        joined = joined + nextItem;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
