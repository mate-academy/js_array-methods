'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let joinedArray = '';

    if (this[0] !== null) {
      joinedArray += this[0];
    }

    let tool = separator;

    if (tool === null) {
      tool = 'null';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinedArray += tool + this[i];
      } else {
        joinedArray += tool + '';
      }
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
