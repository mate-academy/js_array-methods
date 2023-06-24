'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  let result = '';

  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    } else if (this.length === 1) {
      return this[0].toString();
    }

    switch (String(separator)) {
      case '':
        result = '';

        for (const ch of this) {
          result += (ch + separator);
        } break;

      case '-':
        result = '';

        for (let i = 0; i < this.length; i++) {
          result += (i !== this.length - 1)
            ? this[i] + separator : this[i];
        } break;

      case ' ':
        result = '';

        for (let i = 0; i < this.length; i++) {
          result += (i !== this.length - 1)
            ? this[i] + separator : this[i];
        } break;

      case String(null):
        result = '';

        for (let i = 0; i < this.length; i++) {
          result += (i !== this.length - 1)
            ? this[i] + String(separator) : this[i];
        } break;

      case String(undefined):
        result = '';

        for (let i = 0; i < this.length; i++) {
          result += (i !== this.length - 1)
            ? this[i] + ',' : this[i];
        } break;

      case '[object Object]':
        result = '';

        for (let i = 0; i < this.length; i++) {
          result += (i !== this.length - 1)
            ? this[i] + separator : this[i];
        } break;

      case ',':
        result = '';

        for (let i = 0; i < this.length; i++) {
          if (this[i] !== null && this[i] !== undefined) {
            result += (i !== this.length - 1)
              ? this[i] + separator : this[i];
          } else {
            result += (i !== this.length - 1) ? '' + separator : '';
          }
        }
        break;
    }

    return result;
  };

  // arr.join2('-');
};

module.exports = applyCustomJoin;
