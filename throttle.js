// 立即执行，间隔后继续执行
function throttle(cb, time) {
  var t;
  return function () {
    if (!t) {
      t = setTimeout(() => {
        t = null;
        cb.apply(this, arguments);
      }, time);
    }
  };
}
