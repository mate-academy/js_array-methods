'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const validElementsList = [];

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element !== null && element !== undefined) {
        validElementsList.push(element);
      } else {
        validElementsList.push('');
      }
    }

    for (let i = 0; i < validElementsList.length; i++) {
      result += validElementsList[i];

      if (i < validElementsList.length - 1) {
        result += separator;
      }
    }

    return result;
  };
};

module.exports = applyCustomJoin;
