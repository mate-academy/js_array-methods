'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    if (this.length) {
      for (let i = 0; i < this.length; i++) {
        if (i !== this.length - 1) {
          if (separator === undefined) {
            if (this[i] == null) {
              str += '' + ',';
            } else {
              str += this[i] + ',';
            }
          } else if (separator == null) {
            if (this[i] == null) {
              str += '' + 'null';
            } else {
              str += this[i] + 'null';
            }
          } else {
            if (this[i] == null) {
              str += '' + separator;
            } else {
              str += this[i] + separator;
            }
          }
        }

        if (i === this.length - 1) {
          if (this[i] == null) {
            str += '';
          } else {
            str += this[i];
          }
        }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
