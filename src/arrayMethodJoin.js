'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const copyArr = [...this];
    let arrJoin = '';
    let sep = separator;

    if (sep === undefined) {
      sep = ',';
    }

    if (sep === null) {
      sep = 'null';
    }

    for (let i = 0; i < copyArr.length; i++) {
      if (copyArr[i] === null || copyArr[i] === undefined) {
        copyArr[i] = '';
      }

      if (i === copyArr.length - 1) {
        arrJoin += copyArr[i];
      } else {
        arrJoin += copyArr[i] + sep;
      }
    }

    return arrJoin;
  };
}

module.exports = applyCustomJoin;
