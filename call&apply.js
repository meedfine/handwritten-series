// JavaScript深入之call和apply的模拟实现
// https://github.com/mqyqingfeng/Blog/issues/11

Function.prototype.apply2 = function (obj) {
  if (typeof window) {
    obj = obj || window;
  } else if (typeof global) {
    obj = obj || global;
  }
  obj.fn = this; // 调整this指向
  var args = [...arguments];
  var res;
  if (args.length > 1) {
    res = obj.fn(...args[1]); // 将后续参数传入
  } else {
    res = obj.fn(); // 将后续参数传入
  }
  delete obj.fn;
  return res;
};

Function.prototype.apply3 = function (obj) {
  if (typeof window) {
    obj = obj || window;
  } else if (typeof global) {
    obj = obj || global;
  }
  obj.fn = this;
  var res;
  var args = [];
  if (arguments.length > 1) {
    for (var i = 0; i < arguments[1].length; i++) {
      args.push("arguments[1][" + i + "]");
    }
    res = eval("obj.fn(" + args + ")");
  } else {
    res = obj.fn();
  }
  delete obj.fn;
  return res;
};

Function.prototype.call2 = function (obj) {
  if (typeof window) {
    obj = obj || window;
  } else if (typeof global) {
    obj = obj || global;
  }
  obj.fn = this; // 调整this指向
  var args = [...arguments];
  args.shift();
  var res = obj.fn(...args); // 将后续参数传入
  delete obj.fn;
  return res;
};

Function.prototype.call3 = function (obj) {
  if (typeof window) {
    obj = obj || window;
  } else if (typeof global) {
    obj = obj || global;
  }
  obj.fn = this;
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }
  var res = eval("obj.fn(" + args.join(",") + ")");
  delete obj.fn;
  return res;
};

var foo = {
  value: 1,
};

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}

bar.apply(foo, ["kevin", 18]);
bar.apply2(foo, ["kevin", 18]);
bar.apply3(foo, ["kevin", 18]);
