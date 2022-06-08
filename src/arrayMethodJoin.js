'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (const element of this) {
      switch (true) {
        case typeof element === 'undefined'
        && this.indexOf(element) === this.length - 1:
          result += '';
          break;

        case this.indexOf(element) === this.length - 1:
          result += element;
          break;

        case element === null || typeof element === 'undefined' :
          result += '' + separator;
          break;

        default:
          result += element + '' + separator;
      }
    }

    return result;
  };
};

module.exports = applyCustomJoin;
