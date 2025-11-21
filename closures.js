function createCounter() {
  let count = 0; // This 'count' variable is in the outer scope

  function increment() {
    count = count + 1; // The inner function accesses and modifies 'count'
    return count;
  }

  return increment; // The outer function returns the inner function
}

const counter = createCounter(); // 'counter' now holds the 'increment' function

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

for (var j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log(j);
  }, 0);
  console.log(j)
}