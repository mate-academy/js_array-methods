'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      element = (element === null || element === undefined) ? '' : `${element}`;

      string += (i === this.length - 1) ? element : element + separator;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
