'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let connector = separator;

    if (separator === null) {
      connector = 'null';
    }

    if (this.length === 0) {
      return str;
    }

    for (let i = 0; i < this.length; i++) {
      if (i !== this.length - 1) {
        if (this[i] === undefined || this[i] === null) {
          str += connector;
        } else {
          str += this[i] + connector;
        }
      } else {
        str += this[i];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
