class Student {
  constructor() {
    var _name = "";
    this.setName = function (newName) {
      _name = newName;
    };

    this.getName = function () {
      return _name;
    };
  }
}

var std = new Student();
std.setName("Nam");
console.log(std._name);
console.log(std.getName());
