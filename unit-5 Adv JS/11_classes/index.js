const camelToSnakeCase = obj => {
  const snakeCaseObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const snakeKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
      snakeCaseObj[snakeKey] = obj[key];
    }
  }
  return snakeCaseObj;
};

const camelCaseObject = { firstName: 'John', lastName: 'Doe', age: 25 };
const snakeCaseObject = camelToSnakeCase(camelCaseObject);
console.log(snakeCaseObject);
