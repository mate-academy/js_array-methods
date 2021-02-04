'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        if (this[i] === null || this[i] === undefined) {
          if (separator === undefined || separator === null) {
            break;
          } else {
            str = str + separator;
          }
        } else {
          str = str + this[i];
        }
      } else {
        if (this[i] === null || this[i] === undefined) {
          if (separator === undefined) {
            str = str + ',';
          } else if (separator === null) {
            str = str + 'null';
          } else {
            str = str + separator;
          }
        } else {
          if (separator === undefined) {
            str = str + this[i] + ',';
          } else if (separator === null) {
            str = str + this[i] + 'null';
          } else {
            str = str + this[i] + separator;
          }
        }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
