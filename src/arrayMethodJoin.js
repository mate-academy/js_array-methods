'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const separator2 = separator === undefined ? ',' : `${separator}`;

    for (let i = 0; i < this.length; i++) {
      result += this[i] !== null && this[i] !== undefined
        ? this[i].toString() + separator2
        : '' + separator2;
    }

    switch (true) {
      case separator2.length < 1:
        return result;
      case separator2.length >= 1:
        return result.slice(0, -separator2.length);
    }
  };
}

module.exports = applyCustomJoin;
