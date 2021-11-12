class Car {
  constructor() {
    if (this.constructor === Car) {
      throw "day la class truu tuong";
    }
  }

  brake() {
    throw "hay them thuc thi cho method nay";
  }
}

class Bus extends Car {
  constructor(name, brand) {
    super();
    this.name = name;
    this.brand = brand;
  }

  brake() {
    return this.name + " stop";
  }
}

var HaNoiBus = new Bus("HaNoiBus", "ford");
console.log(HaNoiBus.brake());
