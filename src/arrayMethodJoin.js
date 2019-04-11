'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(arg) {
    return this.reduce((str, item) => {
      if (arg === undefined) {
        arg = ',';
      }
      if (arg === null) {
        arg += '';
      }
      if (this.indexOf(item) === this.length - 1 || !arg) {
        return str + item;
      }
      if (item === null || item === undefined) {
        return str + arg;
      }
      return str + item + arg;
    }, '');
  };
}

module.exports = applyCustomJoin;
