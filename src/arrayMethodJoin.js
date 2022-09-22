'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const joinSymbol = String(separator);

    for (let i = 0; i < this.length; i++) {
      let element = String(this[i]);

      if (this[i] === null || this[i] === undefined) {
        element = '';
      }

      if (i === this.length - 1) {
        result += element;
      } else {
        result += (element + joinSymbol);
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
