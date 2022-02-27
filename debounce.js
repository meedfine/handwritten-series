// JavaScript专题之跟着underscore学防抖
// https://github.com/mqyqingfeng/Blog/issues/22
// 每次触发 刷新时间 最后执行
function debounce(cb, time, immediate) {
  var t = null,
    result;
  return function () {
    if (t) {
      clearTimeout(t);
    }
    if (immediate) {
      immediate = false;
      result = cb.apply(this, arguments);
    }
    if (!immediate) {
      t = setTimeout(() => {
        cb.apply(this, arguments);
      }, time);
    }
    return result;
  };
}
