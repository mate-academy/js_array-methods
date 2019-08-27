'use strict';

/**
 * Implement method join
 */
/* eslint-disable no-param-reassign */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    separator = separator === undefined ? ',' : separator;

    let result = ``;

    for (let i = 0; i < this.length; i++) {
      const currentValue = (this[i] === null || this[i] === undefined)
        ? ''
        : this[i];

      result += `${i === 0 ? '' : separator}${currentValue}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
