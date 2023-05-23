'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const delimiter = separator;

    for (let i = 0; i < this.length; i++) {
      if ((this[i] !== null) && (this[i] !== undefined)) {
        result += this[i];
      };

      if (i !== (this.length - 1)) {
        result += delimiter;
      };
    };

    return result;
  };
};

module.exports = applyCustomJoin;
