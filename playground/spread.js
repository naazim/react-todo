function greeting (name,age){
  return console.log('Hi ' + name + ', you are ' + age);
}

var person = ['Andrew', 25];
var person2 = ['Jen', 29];
greeting(...person);
greeting(...person2);


var names = ['Mike', 'ben'];
var final = ['Naazim', ...names];

final.forEach(function(name){
    console.log('Hi ' + name);
  });
