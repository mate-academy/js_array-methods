'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function (separator = ',') {
    let joinedString = '';

    if (this.length === 0) {
      return '';
    }

    if (this.length === 0) {
      return [];
    }

    if (this.length === 1) {
      return '' + this[0];
    }

    if (!this[1] && this[0]) {
      return this;
    }

    for (let i = 0; i < this.length - 1; i++) {
      joinedString += ''
        + ((this[i] === undefined || this[i] === null)
          ? ''
          : this[i])
        + '' + ((separator === null ? 'null' : separator) || '');
    }

    joinedString += ''
      + ((this[this.length - 1] === undefined || this[this.length - 1] === null)
        ? ''
        : this[this.length - 1]);

    return joinedString;
  };
}

module.exports = applyCustomJoin;
