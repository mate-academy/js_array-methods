'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const length = this.length;
    let workingSeparator = '' + separator;

    const checkElement = el => {
      return el === null || typeof el === 'undefined'
        ? ''
        : '' + el;
    };

    let string = checkElement(this[0]);

    if (workingSeparator === 'undefined') {
      workingSeparator = ',';
    }

    for (let i = 1; i < length; i++) {
      string += workingSeparator + checkElement(this[i]);
    }

    return string;
  };
}

module.exports = applyCustomJoin;
