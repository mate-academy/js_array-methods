'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newStr = '';

    for (let indexOfItem = 0; indexOfItem < this.length; indexOfItem++) {
      if (indexOfItem === this.length - 1) {
        newStr += this[indexOfItem];
      } else {
        newStr += this[indexOfItem] + separator;
      }
    }

    return newStr;
  };
}

// applyCustomJoin();

// ['test', 'test'].join2('--');

module.exports = applyCustomJoin;
