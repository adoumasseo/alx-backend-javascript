function grumpySum(a, b) {
  if (a > 5) {
    grumpySum = () => 0;
  }

  return a + b;
}

console.log(grumpySum(1, 1))
console.log(grumpySum(10, 1))
console.log(grumpySum(2, 3))
console.log(grumpySum(2, 100))
