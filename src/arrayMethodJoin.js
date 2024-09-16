'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinStr = '';
    let defaultSep = separator;
    const cleanArr = this.map(elem =>
      elem === undefined || elem === null ? '' : elem);

    if (defaultSep === undefined) {
      defaultSep = ',';
    } else {
      defaultSep += '';
    }

    for (let i = 0; i < cleanArr.length; i++) {
      i === cleanArr.length - 1
        ? (joinStr += cleanArr[i])
        : (joinStr += cleanArr[i] + defaultSep);
    }
    return joinStr;
  };
}

module.exports = applyCustomJoin;
