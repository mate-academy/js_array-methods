'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const separatorSign = String(separator);
    const argumantsArr = this;

    for (let i = 0; i < argumantsArr.length; i++) {
      if (argumantsArr[i] === undefined || argumantsArr[i] === null) {
        result += ',';
        continue;
      } else if (i + 1 === argumantsArr.length) {
        result += argumantsArr[i];
        continue;
      }
      result += argumantsArr[i] + separatorSign;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
