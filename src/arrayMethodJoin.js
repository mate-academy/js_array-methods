'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let strFromArr = '';
    const sepLink = separator === undefined
      ? ',' : separator === null
        ? 'null' : separator;

    for (let arrItem = 0; arrItem < this.length; arrItem++) {
      if (arrItem === this.length - 1) {
        strFromArr += this[arrItem];
        break;
      }

      if (this[arrItem] === undefined || this[arrItem] === null) {
        strFromArr += '' + sepLink;
      } else {
        strFromArr += this[arrItem] + sepLink;
      }
    }

    return strFromArr;
  };
}

module.exports = applyCustomJoin;
