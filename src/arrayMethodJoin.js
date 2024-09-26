'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    const normolizedElement = (el) => {
      if (el === null || el === undefined) {
        return '';
      };

      return el;
    };

    if (!this.length) {
      return result;
    }

    result += normolizedElement(this[0]);

    for (let i = 1; i < this.length; i++) {
      const element = normolizedElement(this[i]);

      result += `${separator}${element}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
