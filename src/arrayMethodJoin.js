'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let newSeparator = separator;

    if (this.length === 0) {
      return '';
    }

    if (separator === null) {
      newSeparator = 'null';
    }

    if (typeof (separator) === 'object' && separator !== null) {
      newSeparator = '[object Object]';
    }

    for (const key of this) {
      str += `${[key]}${[newSeparator]}`;
    }

    return str.substr(0, str.length - newSeparator.length);
  };
}

module.exports = applyCustomJoin;
