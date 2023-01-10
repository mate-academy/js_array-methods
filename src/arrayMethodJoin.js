'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const str = this.toString();
    let res = '';

    for (let i = 0; i < str.length; i++) {
      if (str[i] === ',') {
        res += str[i].replace(str[i], separator);
      } else {
        res += str[i];
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
