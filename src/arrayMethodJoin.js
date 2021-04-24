'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    const separatorStr = separator + '';

    if (separatorStr !== 'undefined') {
      for (const i of this) {
        if (i !== undefined && i !== null) {
          str += i + separatorStr;
        } else {
          str += ',';
        }
      }
    } else {
      for (const i of this) {
        if (i !== undefined && i !== null) {
          str += i + ',';
        } else {
          str += ',';
        }
      }
    }

    if (separatorStr === 'undefined') {
      str = str.substring(0, str.length - 1);
    } else {
      str = str.substring(0, str.length - separatorStr.length);
    }

    return str;
  };
}

module.exports = applyCustomJoin;
