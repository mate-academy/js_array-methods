'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let addToString = '';
    let sep = separator;

    if (this.length === 0) {
      return result;
    }

    if (sep === null) {
      sep = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        if (this[i] === undefined) {
          result = result + '';

          return result;
        }

        result = result + this[i];

        return result;
      }

      if (this[i] === null || this[i] === undefined) {
        addToString = '' + sep;
      } else {
        addToString = this[i] + sep;
      }
      result = result + addToString;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
