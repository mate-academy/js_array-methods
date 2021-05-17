'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let string = '';
    const currentSeparator = separator;

    if (currentSeparator === null) {
      for (let i = 0; i < this.length; i++) {
        if (i === this.length - 1) {
          string += this[i].toString();
          break;
        }

        string += (this[i].toString() + currentSeparator);
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        if (i === this.length - 1) {
          string += this[i];
          break;
        }

        if (this[i] === null || this[i] === undefined) {
          this[i] = '';
        }

        string += (this[i] + currentSeparator);
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
