'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = ``;
    const nullLength = 4;
    const objectLength = 15;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined) {
        str += `${separator}`;
      } else if (this[i] === null) {
        str += `${separator}`;
      } else {
        str += `${this[i]}${separator}`;
      }
    }

    if (separator === null) {
      return str.slice(0, str.length - nullLength);
    } else if (typeof separator === 'object') {
      return str.slice(0, str.length - objectLength);
    } else {
      return str.slice(0, str.length - separator.length);
    }
  };
}

module.exports = applyCustomJoin;
