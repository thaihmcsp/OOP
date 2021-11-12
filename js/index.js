class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    return this.name + " eat";
  }
}

class Human extends Animal {
  constructor(name, fullName) {
    super(name), (this.fullName = fullName);
  }

  cook() {
    return this.name + " cooking";
  }
}

class VietNam extends Human {
  constructor(name, fullName, address) {
    super(name, fullName);
    this.address = address;
  }
}

let dog = new Animal("dog");
let son = new Human("Son", "Nguyen Van Son");
let thai = new VietNam("Thai", "Hoang Minh Thai", "Ha Noi");
console.log(dog);
console.log(son);
console.log(thai.cook());
