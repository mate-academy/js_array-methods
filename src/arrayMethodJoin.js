'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
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

    if (this.length === 0) {
      joinedArray = '';
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
