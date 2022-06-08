'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let mySeparator = separator;
    let join = '';

    if (separator === undefined) {
      mySeparator = ',';
    }

    for (let index = 0; index < this.length; index++) {
      if (this[index] === undefined || this[index] === null) {
        join += '';
      }

      if (this.length - index > 1) {
        join += `${
          this[index] === null
          || this[index] === undefined ? '' : this[index]}${mySeparator
        }`;
      } else {
        join += this[index] === undefined ? '' : this[index];
      }
    }

    return join;
  };
}

module.exports = applyCustomJoin;
