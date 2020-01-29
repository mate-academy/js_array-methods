/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    if (separator === undefined) {
      separator = ',';
    }

    for (const element of this) {
      switch (element) {
        case this[this.length - 1]:
          str += element;
          break;
        case null:
          str += '';
          str += ',';
          break;
        case undefined:
          str += ',';
          break;
        default:
          str += element;
          str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
