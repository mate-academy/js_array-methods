'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let result = ``;

    for (let i = 0; i < this.length; i++) {
      const currentValue = this[i] === undefined || this[i] === null
        ? '' : this[i];

      result += `${i === 0 ? '' : separator}${currentValue}`;
    }

    return result;
  };
};

module.exports = applyCustomJoin;
