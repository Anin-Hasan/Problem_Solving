function climbingStairs(n) {
  let one = 1,
    two = 1,
    temp = 0;
  for (let i = 0; i < n - 1; i++) {
    temp = one;
    one = one + two;
    two = temp;
  }
  return one;
}

console.log(climbingStairs(3));
