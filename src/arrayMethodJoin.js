'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    if (this.length === 0) {
      return '';
    }

    if (separator !== null) {
      for (let i = 0; i < this.length - 1; i++) {
        if (this[i] === undefined || this[i] === null) {
          str += '' + separator;
        } else {
          str += this[i] + separator;
        }
      }

      if (this[this.length - 1] === undefined
        || this[this.length - 1] === null) {
        str += '';
      } else {
        str += this[this.length - 1];
      }
    } else {
      for (let j = 0; j < this.length - 1; j++) {
        if (this[j] === undefined || this[j] === null) {
          str += '' + 'null';
        } else {
          str += this[j] + 'null';
        }
      }

      if (this[this.length - 1] === undefined
        || this[this.length - 1] === null) {
        str += '';
      } else {
        str += this[this.length - 1];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
