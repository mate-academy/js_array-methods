'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let elem;
    let joinSymb = separator;

    if (typeof joinSymb === 'undefined') {
      joinSymb = ',';
    }

    if (joinSymb === null) {
      joinSymb = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      elem = this[i];

      if (this[i] === null || typeof this[i] === 'undefined') {
        elem = '';
      }

      if (i === this.length - 1) {
        result += elem;
      } else {
        result += elem + joinSymb;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
