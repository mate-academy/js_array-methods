'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
  //   let arr = '';
  //   let separatorN = separator;

  //   for (let i = 0; i < this.length; i++) {
  //     if (i === this.length - 1) {
  //       separatorN = '';
  //     }

  //     if (this[i] !== undefined && this[i] !== null) {
  //       arr += this[i];
  //     };

  //     arr += separatorN;
  //   };

  //   return arr;
  // };
    let arr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        arr += this[i];
      };

      if (i !== this.length - 1) {
        arr += separator;
      };
    };

    return arr;
  };
};

module.exports = applyCustomJoin;
