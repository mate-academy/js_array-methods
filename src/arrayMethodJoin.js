'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let outputArr = '';
    if (separator === null) {
      separator = 'null';
    }
    for (let element of this) {
      if (element === undefined || element === null) {
        outputArr += separator;
      } else if (element === this[this.length - 1]) {
        outputArr += element;
      } else {
        outputArr += element + separator;
      };
    };
    return outputArr;
  };
}

module.exports = applyCustomJoin;
