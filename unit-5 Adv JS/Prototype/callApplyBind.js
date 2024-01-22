const arr = [1, 2, 3, 4, 5];

// let ans = Math.max(...arr);
let ans = Math.max.apply(null,arr)
console.log(ans)