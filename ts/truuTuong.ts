interface Animal {
  run();
  eat();
}

class Dog implements Animal {
  animal = "dog";
  name: string;
  constructor(name) {
    this.name = name;
  }
  run() {
    return this.animal + " run";
  }

  eat() {
    return this.animal + " eat";
  }
}

const Husky = new Dog("ky");
console.log(Husky);
console.log(Husky.run());
