'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const length = this.length;
    let workingSeparator = separator;
    let string = this[0] === null || typeof this[0] === 'undefined'
      ? ''
      : '' + this[0];

    if (typeof workingSeparator === 'undefined') {
      workingSeparator = ',';
    }

    if (workingSeparator === null) {
      workingSeparator = 'null';
    }

    for (let i = 1; i < length; i++) {
      string += workingSeparator
        + (this[i] === null || typeof this[i] === 'undefined'
          ? ''
          : this[i]);
    }

    return string;
  };
}

module.exports = applyCustomJoin;
