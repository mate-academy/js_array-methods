'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (const element of this) {
      if (this.indexOf(element) !== this.length - 1) {
        result += typeof element === 'undefined' || element === null
          ? '' + separator : element + '' + separator;
      } else {
        result += typeof element === 'undefined'
          ? '' : element;
      }
    }

    return result;
  };
};

module.exports = applyCustomJoin;
