'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const getEffectiveValue = function(value) {
      if (value === 'null') {
        return value;
      }

      const imValue = String(value);

      return (imValue === 'null' || typeof value === 'undefined') ? ''
        : imValue;
    };

    if (this.length <= 0) {
      return string;
    }

    for (let i = 0; i < this.length - 1; i++) {
      const effectiveValue = getEffectiveValue(this[i]);

      string += effectiveValue + (separator + '');
    }

    return string + getEffectiveValue(this[this.length - 1]);
  };
}

module.exports = applyCustomJoin;
