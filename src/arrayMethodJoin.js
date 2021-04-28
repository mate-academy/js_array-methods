'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strFromArr = '';
    let separatorSign = separator;

    if (separator === null) {
      separatorSign = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      const item = checkItem(this[i]);

      if (i !== this.length - 1) {
        strFromArr += item + separatorSign;
      } else {
        strFromArr += item;
      }
    }

    return strFromArr;
  };
}

function checkItem(item) {
  if (item === undefined || item === null) {
    return '';
  }

  return item;
}

module.exports = applyCustomJoin;
