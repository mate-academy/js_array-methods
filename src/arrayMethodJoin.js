'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let likeJoin = '';
    let sep = separator;

    if (sep === undefined) {
      sep = ',';
    }

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      switch (this[i]) {
        case null:
          likeJoin += '';
          break;
        case undefined:
          likeJoin += '';
          break;
        case false:
          likeJoin += 'false';
          break;
        case NaN:
          likeJoin += 'NaN';
          break;
        default :
          likeJoin += this[i];
      }
      likeJoin += sep;
    }

    if (this[this.length - 1] === undefined) {
      likeJoin += '';
    } else {
      likeJoin += this[this.length - 1];
    }

    return likeJoin;
  };
}

module.exports = applyCustomJoin;
