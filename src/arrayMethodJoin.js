'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (this.length === 1) {
      return this.toString();
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        string += '' + separator;
      } else if (i !== this.length - 1) {
        string += this[i].toString() + separator;
      } else {
        string += this[i].toString();
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
