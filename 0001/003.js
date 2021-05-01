function fib(n) {
  if (n < 0) return;
  if (n === 0 || n === 1) return n;

  // track the previous numbers [before, prev, current]
  let history = [0, 1, undefined]

  for (let i = 1; i < n; i++) {
    history[2] = history[0] + history[1] 
    history[0] = history[1] 
    history[1] = history[2]
  }
 return history[2]
}
console.log(fib(10000))
