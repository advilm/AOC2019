module.exports = class {
  constructor() {
    const input = require('../../Inputs/Day-2.js').split(',').map(x => Number(x));
    var notFound = true;

    function code(arr) {
      const original = arr;
      for (var asdf = 0; asdf < arr.length; asdf += 4) {
    
        if (arr[asdf] === 1)  arr[arr.slice(asdf)[3]] = arr[arr.slice(asdf)[1]] + arr[arr.slice(asdf)[2]];
        else if (arr[asdf] === 2) arr[arr.slice(asdf)[3]] = arr[arr.slice(asdf)[1]] * arr[arr.slice(asdf)[2]];
               
      }

      if (arr[0] === 19690720) {notFound = false; return original[1] * 100 + original[2]; }
    }

    var out;
    while (notFound) out = code([input[0], (Math.random() * 99 | 0) + 1, (Math.random() * 99 | 0) + 1, ...input.slice(3)]);  
    this.result = out;
  }
};