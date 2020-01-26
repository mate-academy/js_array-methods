'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let separatorSign = separator;
    const argumantsArr = this;

    for (let i = 0; i < argumantsArr.length; i++) {
      if (separatorSign === undefined) {
        separatorSign = ',';
      } else if (separatorSign === null) {
        separatorSign = 'null';
      }

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
