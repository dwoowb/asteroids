var sum = function() {
  // var args = Array.prototype.slice.call(arguments)
  var sum = 0;
  for(var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

// console.log(sum(1,2,3))

var myBind = function(object) {
  var that = this;
  var args = arguments;
  return function() {
    that.apply(object, args);
  };
}

var curriedSum = function(numArgs) {
  var numbers = [];

  var _curriedSum = function(number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      var sum = 0;
      for(var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      };
      return sum;
    } else {
      return _curriedSum;
    };
  };

  return _curriedSum;
};


Function.prototype.curry = function(numArgs) {
  var numbers = [];
  var func = this;

  var _curry = function(number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      return func.apply(null, numbers);
    } else {
      return _curry;
    }
  };
  return _curry;
}


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree.curry(3)(4)(20)(3));











