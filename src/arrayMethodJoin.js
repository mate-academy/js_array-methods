'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinedStr = '';
    let separatorInn = separator;
    const arrInn = [...this];

    if (separator === undefined) {
      separatorInn = ',';
    }

    for (let i = 0; i < arrInn.length; i++) {
      if (arrInn[i] === null || arrInn[i] === undefined) {
        arrInn[i] = '';
      }
    }

    if (arrInn.length === 0) {
      return '';
    }

    if (arrInn.length === 1) {
      return arrInn[0].toString();
    }

    for (let i = 0; i < arrInn.length - 1; i++) {
      joinedStr = joinedStr + arrInn[i].toString() + separatorInn;
    }

    joinedStr = joinedStr + arrInn[arrInn.length - 1].toString();

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
