'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];
      const lastElement = i === this.length - 1;

      /**
       * wanted to use `joinedString += element ?? ''`,
       * meaning without any `if()` construction,
       * but mate's eslint unables me to do it
       */
      if (element !== undefined && element !== null) {
        joinedString += element;
      }

      if (!lastElement) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
