'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    if (this.length === 0) {
      return '';
    }

    if (separator === null) {
      // eslint-disable-next-line no-param-reassign
      separator = 'null';

      for (const el of this) {
        newString += this[el];
        newString += separator;
      }

      return newString.substr(0, newString.length - separator.length);
    }

    if (typeof separator === 'object') {
      // eslint-disable-next-line no-param-reassign
      separator = '[object Object]';

      for (const el of this) {
        newString += this[el];
        newString += separator;
      }

      return newString.substr(0, newString.length - separator.length);
    }

    for (let el = 0; el < this.length; el++) {
      newString += [this[el]];
      newString += [separator];
    }

    return newString.substr(0, newString.length - separator.length);
  };
}

module.exports = applyCustomJoin;
