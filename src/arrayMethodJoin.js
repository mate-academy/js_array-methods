'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === null || element === undefined) {
        element = '';
      }

      if (i === this.length - 1) {
        string += `${element}`;
      } else {
        string += `${element}${separator}`;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
