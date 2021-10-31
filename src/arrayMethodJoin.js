'use strict';

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let sep = separator;
    let string = '';
    let count = 0;

    if (this.length === 1) {
      string = this[0].toString();

      return string;
    }

    if (this.length === 0) {
      return '';
    }

    if (sep === ',') {
      for (let i = 0; i < this.length; i++) {
        count++;

        if (this[i] === null || this[i] === undefined) {
          this[i] = '';
        }

        string += this[i];

        if (count === this.length) {
          break;
        }

        string += sep;
      }

      return string;
    }

    if (sep === null) {
      sep = 'null';
    }

    if (sep === '') {
      for (let i = 0; i < this.length; i++) {
        string += this[i];
      }

      return string;
    }

    if (!sep) {
      count = 0;

      for (let i = 0; i < this.length; i++) {
        count++;
        string += this[i];

        if (count === this.length) {
          break;
        }

        string += ',';
      }
    }

    if (typeof sep === 'string' || typeof sep === 'object') {
      count = 0;

      for (let i = 0; i < this.length; i++) {
        count++;
        string += this[i];

        if (count === this.length) {
          break;
        }
        string += sep;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
