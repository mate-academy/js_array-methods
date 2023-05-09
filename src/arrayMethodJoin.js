'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] === 'number' || typeof this[i] === 'string'
        || typeof this[i] === 'boolean') {
        result += this[i];
      } else {
        result += '';
      }

      if (i < this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
