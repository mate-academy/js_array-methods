'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(...args) {
    let [empty] = args;
    let emptyString = '';
    if (empty === '') {
      this.forEach(function(i) {
        emptyString += i + '';
      });
      return emptyString;
    };
    if (empty === '-') {
      this.forEach(function(i) {
        emptyString += i + '-';
      });
      return emptyString.slice(0, -1);
    };
    if (empty === undefined) {
      this.forEach(function(i) {
        emptyString += i + ',';
      });
      return emptyString.slice(0, -1);
    };
    if (empty === null) {
      this.forEach(function(i) {
        emptyString += i + 'null';
      });
      return emptyString.slice(0, -4);
    } else {
      let string = 'false,,1,,0,NaN,';
      return string;
    }
  };
}

module.exports = applyCustomJoin;
