

function grandFather(name, age, locatiion) {
    this.name = name;
    this.age = age;
    this.locatiion = locatiion;
  }

  grandFather.prototype.print = function () {
    console.log("Hi my name is " + this.name + " and my age is " + this.age);
  };

  Object.setPrototypeOf(father.prototype, grandFather.prototype);

  function father(name, age,location,num) {
    grandFather.call(this, name, age,location);
    this.num = num;
  }
  var father1 = new father("Vijay", 24,'indore','12345');
console.log(father1)