'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(...args) {
    const separator = args;
    let result = '';

    for (let i = 0; i < args.length; i++) {
      if (separator[i] === undefined) {
        separator[i] = ',';
      } else if (separator[i] === null) {
        separator[i] = 'null';
      }
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (i < this.length - 1) {
        result += separator;

        if (!args.length) {
          result += ',';
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
