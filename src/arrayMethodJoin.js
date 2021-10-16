'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    if (this.length === 0 || this.length === 1) {
      for (const el of this) {
        newString += el;
      }

      /* if length is zero return empty str, if length is one
      return str without a separator
      */
      return '' || newString;
    }

    for (let i = 0; i < this.length - 1; i++) {
      /* eslint valid-typeof: ["error", { "requireStringLiterals": true}]
      */
      if ((this[i] === undefined || this[i] === null)) {
        this[i] = '';
      }

      if (this[this.length - 1] === undefined) {
        this[this.length - 1] = '';
      }

      if (separator === null) {
        // eslint-disable-next-line no-param-reassign
        separator = 'null';
      }

      newString += this[i] + separator;
    }

    /* remove separator after the last element in the string */
    newString += this[this.length - 1];

    return newString;
  };
}

module.exports = applyCustomJoin;
