/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    const strSeparator = String(separator);

    for (const element of this) {
      switch (element) {
        case this[this.length - 1]:
          str += element;
          break;
        case null:
        case undefined:
          str += strSeparator;
          break;
        default:
          str += element + strSeparator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
