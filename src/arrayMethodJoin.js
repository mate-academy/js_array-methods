'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        str += this[i];
      }
    
      if (this.length !== i + 1) {
        str += separator;
      }
    }
    
    return str;
  };
}

module.exports = applyCustomJoin;
