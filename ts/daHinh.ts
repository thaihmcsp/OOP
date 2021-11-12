class Human {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak(something: string) {
    return something;
  }
}

class Men extends Human {
  country: string;
  constructor(name: string, age: number, country: string) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.country = country;
  }

  speak(something: string) {
    return this.name + " say: " + something;
  }

  eat() {
    return this.name + " is eating";
  }
}

const Huan = new Human("Huan", 22);
console.log(Huan.speak("OK"));

const Tung = new Men("Tung", 25, "VN");
console.log(Tung.speak("OK"));
