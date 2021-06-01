console.log("Hello Typescript");
var x = 10; // Type inference
console.log("x: ", x);
x = 20;
//x = "30"; //compilation error
var y; // Type inference to any
y = 200;
y = "300";
console.log("y: ", y);
var z; // Type annotation
z = "Welcome";
//z = 300; //compilation error
console.log("z: ", z);
var user;
user = { id: 1, name: "Anil" };
console.log("user: ", user);
