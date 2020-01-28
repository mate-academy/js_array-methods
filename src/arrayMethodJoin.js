'use strict';

function applyCustomJoin() {
  // eslint-disable-next-line no-extend-native
  Array.prototype.join2 = function(separator = ',') {
    let joinedArray = '';

    if (!this.length) {
      return joinedArray;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        joinedArray += separator;
      } else if (i === this.length - 1) {
        joinedArray += `${this[i]}`;

        return joinedArray;
      } else {
        joinedArray += `${this[i]}${separator}`;
      }
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
