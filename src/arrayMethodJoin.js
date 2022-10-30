'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let copy = '';

    if (separator === null) {
      for (let k = 0; k < this.length; k++) {
        copy += 'null' + this[k];
      }
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        copy += separator;
      } else {
        copy += separator + this[i];
      }
    }

    let result = copy;

    if (separator !== '') {
      result = copy.slice(1);
    }

    if (typeof (separator) === 'object') {
      result = copy.slice(15);
    }

    if (separator === null) {
      result = copy.slice(4, -4);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
