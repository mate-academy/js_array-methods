/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    separator = separator !== undefined ? separator : ',';

    return this.reduce((result, element, index) => {
      if (element !== null && element !== undefined) {
        result += element;
      }

      if (index < this.length - 1) {
        result += separator;
      }

      return result;
    }, '');
  };
}

module.exports = applyCustomJoin;
