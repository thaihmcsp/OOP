class Student {
  name: string;
  age: number;
  private money: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getAge(): number {
    return this.age;
  }

  getName(): string {
    return this.name;
  }

  setMoney(amount: number) {
    this.money = amount;
  }
  getMoney() {
    return this.money;
  }
}

const Huy = new Student("Huy", 25);

Huy.setMoney(3000);

console.log(Huy);
console.log(Huy.getName());
console.log(Huy.name);
console.log(Huy.getMoney());
