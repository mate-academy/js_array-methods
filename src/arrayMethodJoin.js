'use strict';
/* eslint-disable */
/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if(separator === undefined) {separator = ','}
    separator +='';
  console.log("separator = ", separator)
    let joined = '';
    for(let i = 0; i < this.length; i++) {
      if(this[i] === null || this[i] === undefined) {this[i] = '';}

      if(i === this.length-1){joined += this[i];console.log("i = ", i)}
      else {joined += this[i] +separator; };
    }

    return joined;
    //end
  };

}

module.exports = applyCustomJoin;

