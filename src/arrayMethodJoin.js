'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    function checkElem(elem) {
      if (elem === null || elem === undefined) {
        return '';
      }

      return elem;
    }

    if (this.length === 0) {
      return '';
    }

    let result = `${checkElem(this[0])}`;

    for (let i = 1; i < this.length; i++) {
      const elem = checkElem(this[i]);

      result = `${result}${separator}${elem}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
