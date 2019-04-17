'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(arg) {
    let resString = '';
    if (arg === undefined) {
      arg = ',';
    }
    if (arg === null) {
      arg += '';
    }
    for (let item of this) {
      if (this.indexOf(item) === this.length - 1 || !arg) {
        resString += item;
      } else if (item === null || item === undefined) {
        resString += arg;
      } else {
        resString += item + arg;
      }
    }
    return resString;
  };
}
module.exports = applyCustomJoin;
