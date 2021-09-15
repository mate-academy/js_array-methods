'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    if (this.length === 0) {
      return '';
    }

    if (separator === null) {
      // eslint-disable-next-line no-param-reassign
      separator = 'null';

      for (const key of this) {
        str += `${key}${separator}`;
      }

      return (str.substr(0, str.length - separator.length));
    }

    if (typeof (separator) === 'object') {
      // eslint-disable-next-line no-param-reassign
      separator = '[object Object]';

      for (const key of this) {
        str += `${key}${separator}`;
      }

      return str.substr(0, str.length - separator.length);
    }

    for (const key of this) {
      str += `${[key]}${[separator]}`;
    }

    return str.substr(0, str.length - separator.length);
  };
}

module.exports = applyCustomJoin;
