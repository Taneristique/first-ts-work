
var a=function(x,y){return x**y};
console.log(a(2,6));
class Person {
    constructor(
      public id: String, 
      public name: String, 
      public status: String,
      public existence:boolean
      ) {};
  
    static deserialize(input:any): Person {
      return new Person(input.id, input.name, input.status,input.existence);
    }
  }
  
  var person = Person.deserialize({id: 'PbB656564423158', name: 'Winston', status: 'Novel Character',existence:false});
  console.log(person);
  document.write('Id :'+' '+ person.id+'</br>'+'name :'+' '+person.name+'</br>','status :'+' '+ person.status+'</br>'+'existence :'+person.existence);
  
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