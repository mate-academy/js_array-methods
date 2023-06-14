'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const newArray = [];
    let str = '';
    let divider = separator;

    if (separator === null) {
      divider = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        newArray[i] = '';
      } else {
        newArray[i] = this[i];
      }
      str += newArray[i] + (i !== this.length - 1 ? divider : '');
    }

    return str;
  };
}

module.exports = applyCustomJoin;
