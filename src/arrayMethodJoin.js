'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (separator === undefined) {
        if (this[i] === this[i - 1]) {
          str += '';
        } else {
          if (this[i] === undefined || this[i] === null) {
            str += ',';
          } else {
            if (i === this.length - 1) {
              str += this[i];
            } else {
              str += `${this[i]},`;
            }
          }
        }
      } else if (separator === '') {
        if (this[i] === undefined || this[i] === null) {
          str += '';
        } else {
          str += this[i];
        }
      } else {
        if (this[i] === undefined || this[i] === null) {
          str += separator;
        } else {
          if (i === this.length - 1) {
            str += this[i];
          } else {
            str += `${this[i]}${separator}`;
          }
        }
      }
    }

    if (str[str.length - 1] === str[str.length - 2]) {
      str = str.substr(0, str.length - 1);
    }

    return str;
  };
}

module.exports = applyCustomJoin;
