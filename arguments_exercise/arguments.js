// function sum() {
//   const args = Array.from(arguments);
//   let sum = 0;
//   args.forEach(el => sum += el);
//   return sum;
// }

function sum(...args) {
  return args.reduce((prev, curr) => {
    return prev + curr;
  });
}

Function.prototype.myBind = function(ctx, ...bindArgs) {
  return (...callArgs) => {
    this.apply(ctx, bindArgs.concat(callArgs));
  }
}

function curriedSum(numArgs) {
  let numbers = [];
  let _curriedSum = (num) => {
    numbers.push(num); 
    if (numbers.length === numArgs) {
      return numbers.reduce((prev, curr) => {
        return prev + curr;
      });
    } else {
        return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  let args = [];
  let _curriedFunc = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this.apply(this, args);
    } else {
      return _curriedFunc;
    }
  }
  return _curriedFunc;
}

