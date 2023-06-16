/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let element = 0; element < this.length; element++) {
      if (typeof this[element] !== 'undefined' && this[element] !== null) {
        joinedString += this[element];
      }

      if (element !== this.length - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
};

module.exports = applyCustomJoin;
