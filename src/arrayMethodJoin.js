'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let strFromArr = '';
    const separatorSign = checkSeparator(separator);

    if (this.length === 0) {
      return strFromArr;
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

function checkSeparator(separator) {
  if (separator === undefined) {
    return ',';
  }

  if (separator === null) {
    return 'null';
  }

  return separator;
}

function checkItem(item) {
  if (item === undefined || item === null) {
    return '';
  }

  return item;
}

module.exports = applyCustomJoin;
