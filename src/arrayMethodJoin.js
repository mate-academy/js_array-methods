'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    if (separator === undefined) {
      for (let i = 0; i < this.length; i++) {
        if (i === this.length - 1) {
          if (this[i] === undefined || this[i] === null) {
            str += ',';
          } else {
            str += `${this[i]}`;
          }
        } else {
          if (this[i] === undefined || this[i] === null) {
            str += ',';
          } else {
            str += `${this[i]}` + ',';
          }
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        if (i === this.length - 1) {
          if (this[i] === undefined || this[i] === null) {
            str += separator;
          } else {
            str += `${this[i]}`;
          }
        } else {
          if (this[i] === undefined || this[i] === null) {
            str += separator;
          } else {
            str += `${this[i]}` + separator;
          }
        }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
