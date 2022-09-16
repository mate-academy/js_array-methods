/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resalt = '';

    for (let i = 0; i < this.length; i++) {
      if (separator === null) {
        separator = 'null';
      }

      if (i < this.length - 1) {
        if (this[i] === null || this[i] === undefined) {
          resalt = resalt + '' + separator;
        } else {
          resalt = resalt + this[i] + separator;
        }
      } else {
        if (this[i] === null || this[i] === undefined) {
          resalt = resalt + '';
        } else {
          resalt = resalt + this[i];
        }
      }
    }

    return resalt;
  };
}

module.exports = applyCustomJoin;
