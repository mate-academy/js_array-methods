'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let userSeparator = separator;

    if (userSeparator === undefined) {
      userSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      const arrElement = this[i];

      switch (true) {
        case this.length === 1:
          result += arrElement;

          return result;

        case i === (this.length - 1) && arrElement === undefined:
          break;

        case i === (this.length - 1):
          result += arrElement;

          break;

        case arrElement === null || arrElement === undefined:
          result += userSeparator;

          continue;

        default:
          result += this[i] + `${userSeparator}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
