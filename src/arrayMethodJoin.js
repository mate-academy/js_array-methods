'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let newSaparator = separator;
    const newArr = this;
    const notAdd = [null, undefined];

    if (newSaparator === null) {
      newSaparator = 'null';
    }

    for (let i = 0; i < newArr.length; i++) {
      const cell = newArr[i];

      if (notAdd.includes(cell)) {
        if (i + 1 !== newArr.length) {
          result += newSaparator;
        }
        continue;
      }

      if (i + 1 === newArr.length) {
        result += cell;
        continue;
      }

      result += cell + newSaparator;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
