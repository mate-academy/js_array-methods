'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this.length === 0) {
      return result;
    }

    if (!((this[0] === null) || (this[0] === undefined))) {
      result += this[0];
    }

    switch (separator) {
      case '': {
        for (let i = 1; i < this.length; i++) {
          if ((this[i] === null) || (this[i] === undefined)) {
            result += '';
          } else {
            result += this[i];
          }
        }
        break;
      }

      default: {
        for (let i = 1; i < this.length; i++) {
          if ((this[i] === null) || (this[i] === undefined)) {
            result = result + separator + '';
          } else {
            result = result + separator + this[i];
          }
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
