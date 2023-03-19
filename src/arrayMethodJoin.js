'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let concatening = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        concatening += `${separator}`;
      } else if (this.length - 1 === i) {
        concatening += `${this[i]}`;
      } else {
        concatening += `${this[i]}${separator}`;
      }
    }

    if (this[this.length - 1] === undefined) {
      concatening = concatening.substr(0, concatening.length - 1);
    }

    return concatening;
  };
}

module.exports = applyCustomJoin;
