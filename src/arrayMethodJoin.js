'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strFromArr = '';
    let separate = separator;

    if (separate === null) {
      separate = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      let currentElement = null;

      if ((this[i] === null) || (this[i] === undefined)) {
        currentElement = '';
      } else {
        currentElement = this[i];
      }

      if (i === (this.length - 1)) {
        strFromArr += currentElement;
      } else {
        strFromArr += (currentElement + separate);
      }
    }

    return strFromArr;
  };
}

module.exports = applyCustomJoin;
