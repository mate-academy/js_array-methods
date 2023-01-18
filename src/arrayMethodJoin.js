'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';
    const separatorString = String(separator);

    for (let i = 0; i < this.length; i++) {
      
      if (this[i] !== null && this[i] !== undefined) {
        res += this[i];
      }
    
      if (i !== this.length - 1) {
        res += separatorString;
      }
    }
    return res;
  };
}

module.exports = applyCustomJoin;
