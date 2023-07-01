'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let complete = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        complete += '';

        if (i < this.length - 1) {
          if (separator === undefined) {
            complete += ',';
          } else {
            complete += separator;
          }
        }
      } else {
        complete += this[i];

        if (i < this.length - 1) {
          if (separator === undefined) {
            complete += ',';
          } else {
            complete += separator;
          }
        }
      }
    }

    return complete;
  };
}

module.exports = applyCustomJoin;
