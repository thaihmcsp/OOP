class Animal {
  constructor() {
    if (this.constructor === Animal) {
      throw "Day la abstraction";
    }
  }

  say() {
    throw "day function absactaction";
  }

  eat() {
    console.log("nomarl Function");
  }
}

class Cat {
  constructor() {
    super();
  }

  say() {
    console.log("goo ggoo");
  }
}

class Dog extends Animal {
  constructor() {
    super();
  }

  say() {
    console.log("goo ggoo");
  }
}

var dog = new Dog();
dog.say();
