var mySqrt = function (x) {
  let l = 0,
    r = x,
    res = 0;

  while (l <= r) {
    let m = Math.trunc(l + (r - l) / 2);

    if (m * m > x) {
      r = m - 1;
    } else if (m * m < x) {
      l = m + 1;
      res = m;
    } else {
      return m;
    }
  }
  return res;
};
