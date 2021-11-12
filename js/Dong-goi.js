function Car(name, year) {
  this.name = name;
  this.year = year;
  var count = 1;
  this.setCount = function (value) {
    count = value;
  };

  this.getCount = function () {
    return count;
  };
}

let ford = new Car("Ford", 2014);
ford.setCount(100);
console.log(ford.getCount());
