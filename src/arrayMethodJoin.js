'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === null || element === undefined) {
        element = '';
      }

      if (i === this.length - 1) {
        result += element;
        return result;
      }
      result += `${element}` + separator;
    }
    return result;
  };
}

module.exports = applyCustomJoin;
