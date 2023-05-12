'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length < 1) {
      return '';
    }

    if (this.length < 2) {
      return String(this[0]);
    }

    const gap = (separator === undefined || separator === null)
      ? `${separator}`
      : separator;

    let output = (Object.is(this[0], null) || Object.is(this[0], undefined))
      ? ''
      : this[0];

    for (let i = 1; i < this.length; i++) {
      const item = (Object.is(this[i], null) || Object.is(this[i], undefined))
        ? ''
        : this[i];

      output += (gap + item);
    }

    return output;
  };
}

module.exports = applyCustomJoin;
