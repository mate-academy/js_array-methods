'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    for (let i = 0; i < this.length; i++) {
      if ((this[i] === null) || (this[i] === undefined)) {
        this[i] = '';
      }
    }

    let result = '';

    if (this.length === 0) {
      return result;
    }

    switch (separator) {
      case undefined: {
        result += this[0];

        for (let i = 1; i < this.length; i++) {
          result = result + ',' + this[i];
        }
        break;
      }

      case '': {
        for (let i = 0; i < this.length; i++) {
          result += this[i];
        }
        break;
      }

      default: {
        result += this[0];

        for (let i = 1; i < this.length; i++) {
          result = result + separator + this[i];
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
