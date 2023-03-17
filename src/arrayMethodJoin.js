'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = this[0] === null || this[0] === undefined ? '' : `${this[0]}`;// eslint-disable-line

    for (let i = 1; i < this.length; i++) {
      joinedStr += `${separator}` + (this[i] === null || this[i] === undefined ? '' : `${this[i]}`);// eslint-disable-line
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
