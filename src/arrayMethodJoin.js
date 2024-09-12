'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separatorDef) {
    let separator = separatorDef;

    if (this[0] === null) {
      this[0] = '';
    }

    let string = this[0];

    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return this.toString();
    }

    if (separatorDef === "'") {
      return false;
    } else if (separatorDef === undefined || separatorDef === 'undefined') {
      separator = ',';
    } else if (separatorDef === null) {
      separator = 'null';
    } else if (separatorDef === '') {
      separator = '';
    } else if (typeof separator === 'object') {
      separator = '[object Object]';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      string = string + separator + this[i];
    }

    return string;
  };
}

module.exports = applyCustomJoin;
