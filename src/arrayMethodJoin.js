'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    if (this.length > 0) {
      joinedString += this[0] === null ? '' : this[0];
    } else {
      return '';
    };

    for (let i = 1; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        joinedString += ',';
      } else {
        joinedString += `${separator}${this[i]}`;
      };
    };

    return joinedString;
  };
};

module.exports = applyCustomJoin;
