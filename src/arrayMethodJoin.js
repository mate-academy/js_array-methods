'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    let index = 0;

    for (const word of this) {
      if (index === this.length - 1 && word === undefined) {
        break;
      }

      if (index === this.length - 1) {
        string += word;
        break;
      }

      if (word === null || word === undefined) {
        string += separator;
        index++;
        continue;
      }

      string = string + word + separator; // can`t use plus operator
      // bcus test with null separator won`t work

      index++;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
