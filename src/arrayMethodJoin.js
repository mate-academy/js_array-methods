'use strict';
/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const defaultSeparator = ',';
    let symbol = separator;
    if (symbol === undefined) {
      symbol = defaultSeparator;
    };
    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += symbol;
      } else if (i !== this.length - 1) {
        result += `${this[i]}${symbol}`;
      } else {
        result += `${this[i]}`;
      };
    };
    return result;
  };
};
module.exports = applyCustomJoin;