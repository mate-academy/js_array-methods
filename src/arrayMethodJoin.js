'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(elemForParsing = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'undefined' || this[i] === null) {
        string += elemForParsing;
      } else if (i === this.length - 1) {
        string += this[i];
      } else {
        string += ('' + this[i]) + elemForParsing;
      }
    }
    return string;
  };
}

module.exports = applyCustomJoin;
