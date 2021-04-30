var a = function (x, y) { return Math.pow(x, y); };
console.log(a(2, 6));
var Person = /** @class */ (function () {
    function Person(id, name, status, existence) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.existence = existence;
    }
    ;
    Person.deserialize = function (input) {
        return new Person(input.id, input.name, input.status, input.existence);
    };
    return Person;
}());
var person = Person.deserialize({ id: 'PbB656564423158', name: 'Winston', status: 'Novel Character', existence: false });
console.log(person);
document.write('Id :' + ' ' + person.id + '</br>' + 'name :' + ' ' + person.name + '</br>', 'status :' + ' ' + person.status + '</br>' + 'existence :' + person.existence);
/*var data={
  "cars": {
      "Nissan": {
          "Sentra": {"doors":4, "transmission":"automatic"},
          "Maxima": {"doors":4, "transmission":"automatic"}
      },
      "Ford": {
          "Taurus": {"doors":4, "transmission":"automatic"},
          "Escort": {"doors":4, "transmission":"automatic"}
      }
  }
}

data.cars['Nissan']['Sentra'].doors   // 4
data.cars['Nissan']['Maxima'].doors   // 4
data.cars['Nissan']['Maxima'].transmission   // automatic

for (var make in data.cars) {
  for (var model in data.cars[make]) {
      var doors = data.cars[make][model].doors;
      document.body.innerHTML=make + ', ' + model + ', ' + doors;
  }
}*/
console.log('code works,succes');
