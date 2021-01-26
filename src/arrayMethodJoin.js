'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    if (!this.length) {
      return str;
    } else {
      for (let i = 0; i < this.length; i++) {
        if (this[i] === undefined || this[i] === null) {
          str += '';
        } else {
          str += this[i];
        }

        if (i < this.length - 1) {
          switch (separator) {
            case undefined:
              str += ',';
              break;
            case null:
              str += 'null';
              break;
            default:
              str += separator;
          }
        }
      }

      return str;
    }
  };
}

module.exports = applyCustomJoin;
