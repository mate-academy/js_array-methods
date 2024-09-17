'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let index = 0; index < this.length; index++) {
      const element = this[index];

      if (![null, undefined, []].includes(element)) {
        result += element;
      }

      if (index < this.length - 1) {
        result += separator;
      };
    };

    return result;
  };
};

module.exports = applyCustomJoin;
