'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let resultStr = '';
    let joincharacter = separator;

    if (separator === '') {
      joincharacter = '';
    } else if (separator === null) {
      joincharacter = 'null';
    } else if (separator === undefined) {
      joincharacter = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1 && this[i] === undefined) {
        continue;
      } else if (i === this.length - 1) {
        resultStr += this[i];
      } else if (this[i] === null || this[i] === undefined) {
        resultStr += '' + joincharacter;
      } else {
        resultStr += this[i] + joincharacter;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
