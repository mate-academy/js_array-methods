'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let res = '';

    for (let i = 0; i < this.length; i++) {
      if (separator === undefined) {
        if (i + 1 === this.length) {
          if (this[i] === null || this[i] === undefined) {
            res += ',';
          } else {
            res += this[i];
          }
        } else {
          if (this[i] === null || this[i] === undefined) {
            res += ',';
          } else {
            res += this[i] + ',';
          }
        }
      } else if (separator === null) {
        if (i + 1 === this.length) {
          if (this[i] === null || this[i] === undefined) {
            res += ',';
          } else {
            res += this[i];
          }
        } else {
          if (this[i] === null || this[i] === undefined) {
            res += ',';
          } else {
            res += this[i] + 'null';
          }
        }
      } else {
        if (i + 1 === this.length) {
          if (this[i] === null || this[i] === undefined) {
            res += ',';
          } else {
            res += this[i];
          }
        } else {
          if (this[i] === null || this[i] === undefined) {
            res += ',';
          } else {
            res += this[i] + separator;
          }
        }
      }
    }

    return res;
  };
};

module.exports = applyCustomJoin;
