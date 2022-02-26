// JavaScript深入之new的模拟实现
// https://github.com/mqyqingfeng/Blog/issues/13
function factory() {
  var obj = {};
  var Constructor = [].shift.call(arguments); // 简洁的将arguments第一位挑出来，同时arguments也去掉了第一个参数
  obj.__proto__ = Constructor.prototype; // 实例 需要与构造函数的原型 关联上
  var res = Constructor.apply(obj, arguments); //  修改this，传入参数 执行构造函数
  return typeof res == "object" ? res : obj; // new的逻辑，如果是一个对象，我们就返回这个对象，如果没有，我们该返回什么就返回什么。
}
