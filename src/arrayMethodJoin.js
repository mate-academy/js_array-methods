'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    if (this.length === 0) {
      return '';
    }
    let separatorFun = separator;
    if (separatorFun === undefined) {
      separatorFun = ',';
    }
    if (separatorFun === null) {
      separatorFun = 'null';
    }
    for (let i = 0; i < this.length; i++) {
      let item = this[i];
      if (item === null || item === undefined) {
        item = '';
      }
      str += item.toString();
      if (i !== this.length - 1) {
        str += separatorFun.toString();
      }
    }
    return str;
  };
}

module.exports = applyCustomJoin;
