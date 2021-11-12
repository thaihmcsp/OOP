class People {
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

class Person extends People {
  country: string;
  constructor(name: string, age: number, country: string) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.country = country;
  }

  eat() {
    return this.name + " is eating";
  }
}
//---------------------------------------------
const Thai = new People("thai", 22);
Thai.name = "Thai";
console.log(Thai);
console.log(Thai.speak("hello"));
//---------------------------------------------
const Thong = new Person("Thong", 25, "VN");
console.log(Thong);
console.log(Thong.eat());
console.log(Thong.speak("ok"));
