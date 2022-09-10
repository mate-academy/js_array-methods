/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resalt = '';
    let step;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (separator === null) {
        separator = 'null';
      }

      if (separator === undefined) {
        separator = ',';
      }

      if (this.length === 1) {
        resalt = resalt + this[i];
      } else {
        if (i < this.length - 1) {
          step = this[i] + separator;
        } else {
          step = this[i];
        }

        resalt = resalt + step;
      }
    }

    return resalt;
  };
}

module.exports = applyCustomJoin;
