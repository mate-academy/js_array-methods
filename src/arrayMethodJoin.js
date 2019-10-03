'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let sep = separator;
    if (sep === undefined) {
      sep = ',';
    }
    if (this.length === 0) {
      return '';
    }
    return this.map(item =>
      (item === null || item === undefined) ? '' : item.toString())
      .reduce((str, item) =>
        str + sep + item);
  };
}

module.exports = applyCustomJoin;
