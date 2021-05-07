'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let delim = separator;
    let resString = '';

    function getNullUndefined(value) {
      let string;

      if (value === undefined || value === null) {
        string = '';

        return string;
      }

      return value;
    }

    if (delim === undefined) {
      delim = ',';
    }

    if (delim === null) {
      delim = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (i !== this.length - 1) {
        resString += getNullUndefined(this[i]) + delim;
      } else {
        resString += getNullUndefined(this[i]);
      }
    }

    return resString;
  };
}

module.exports = applyCustomJoin;
