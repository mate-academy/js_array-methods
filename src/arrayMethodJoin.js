'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const divider = String(separator);
    let string = '';

    for (let i = 0; i < this.length; i++) {
      switch (this[i]) {
        case null:
        case undefined:
          string += '';
          break;
        default:
          string += this[i];
      }

      if (i !== this.length - 1) {
        string += divider;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
