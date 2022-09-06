'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      switch (true) {
        case ((i === (this.length) - 1) && this[i] === undefined):
          str += '';
          break;
        case (i === (this.length) - 1):
          str += this[i];
          break;
        case (this[i] === undefined || this[i] === null):
          str += separator;
          break;
        case true:
          str += this[i] + String(separator);
          break;
      }
    }

    return str;
  };
};

module.exports = applyCustomJoin;
