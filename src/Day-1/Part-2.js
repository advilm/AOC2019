module.exports = class {
  constructor() {
    this.result = require('../../Inputs/Day-1.js').split('\n').map(x => {
      var amount = 0;
      while (Math.floor(x / 3) - 2 >= 0) amount += x = Math.floor(x / 3) - 2;
      return amount;
    }).reduce((a, b) => a + b);
  }
};