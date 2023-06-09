'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let separatorMeaning;

    if (separator === undefined) {
      separatorMeaning = ',';
    } else if (separator === null) {
      separatorMeaning = 'null';
    } else if (typeof separator === 'object') {
      separatorMeaning = separator.toString();
    } else {
      separatorMeaning = String(separator);
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '';
      } else {
        result += String(this[i]);
      }

      if (i !== this.length - 1) {
        result += separatorMeaning;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
