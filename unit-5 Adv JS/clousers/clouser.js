function func1() {
  let obj = {};
  return function (params, value) {
    obj[params] = value;
    return obj;
  };
}

const print = func1();
console.log(print("key1", "value1"));
console.log(print("key2", "value2"));

