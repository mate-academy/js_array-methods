'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let stringResult = '';
    let sep;

    if (this.length === 0) {
      return stringResult;
    }

    if (this.length === 1) {
      stringResult += this[0];

      return stringResult;
    }

    if (arguments.length === 0 || arguments[0] === undefined) {
      sep = ',';
    } else if (arguments[0] === null) {
      sep = 'null';
    } else {
      sep = arguments[0];
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined) {
        if (i !== this.length - 1) {
          stringResult += sep;
        }
        continue;
      } else if (this[i] === null) {
        stringResult += sep;
        continue;
      } else if (this[i] === 'null') {
        stringResult += null;
        stringResult += sep;
        continue;
      } else if (isNaN(this[i])) {
        stringResult += 'NaN';
        stringResult += sep;
        continue;
      } else if (this[i] === false) {
        stringResult += 'false';
        stringResult += sep;
        continue;
      }

      stringResult += this[i];

      if (i !== this.length - 1) {
        stringResult += sep;
      }
    }

    return stringResult;
  };
}

module.exports = applyCustomJoin;
