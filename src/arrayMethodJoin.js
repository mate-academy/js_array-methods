'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let spr = ',';

    if (typeof separator !== 'undefined') {
      spr = String(separator);
    }

    for (let ind = 0; ind < this.length; ind++) {
      let element = '';

      if (!(this[ind] === null || typeof this[ind] === 'undefined')) {
        element = String(this[ind]);
      }

      if (ind === this.length - 1) {
        result = result.concat(element);
        break;
      }

      result = result.concat(element, spr);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
