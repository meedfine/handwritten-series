function add(...i) {
  var count = 0;
  var sum = i.reduce((a, b) => a + b, 0);
  count += sum;
  console.log(count);
  var fn = function (...i2) {
    count = i2.reduce((a, b) => a + b, count);
    console.log(count);
    return fn;
  };
  fn.toString = function () {
    return count;
  };
  return fn;
}

console.log(add(1, 2)(2, 3, 4)(3)(4) + 5);
