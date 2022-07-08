'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (!this.length) {
      return '';
    }

    let joinedItems = '';
    let divider = separator;

    if (!arguments.length || separator === undefined) {
      divider = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1 && this[i] === undefined) {
        break;
      }

      if (this[i] === undefined || this[i] === null) {
        joinedItems += divider;
        continue;
      }

      if (i === this.length - 1) {
        joinedItems += '' + this[i];
        break;
      }

      joinedItems += this[i] + '' + divider;
    }

    return joinedItems;
  };
}

module.exports = applyCustomJoin;
