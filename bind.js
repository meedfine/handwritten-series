// JavaScript深入之bind的模拟实现
// https://github.com/mqyqingfeng/Blog/issues/12

Function.prototype.bind2 = function (context, ...rest) {
  var func = this;
  var repFunc = function (param) {
    return func.apply(
      this instanceof repFunc ? this : context,
      rest.concat(param)
    );
  };
  repFunc.prototype = this.prototype;
  return repFunc;
};

var value = 2;

var foo = {
  value: 1,
};

function bar(name, age) {
  this.habit = "shopping";
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.prototype.friend = "kevin";

var bindFoo = bar.bind(foo, "daisy");

var obj = new bindFoo("18");
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin

var bindFoo2 = bar.bind2(foo, "daisy");

var obj2 = new bindFoo2("18");
// undefined
// daisy
// 18
console.log(obj2.habit);
console.log(obj2.friend);
// shopping
// kevin
