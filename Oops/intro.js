/*  car = {
   name: "BMW",
   cost: 75.6,
   mileage: 8.6,
 


   start: function(){
    console.log("Car is starting");
    
   },

   stop: function(){
    console.log("Car is stopping");

   },

   accelerate: function(){
    console.log("Car is accelerating");
   }
};

console.log(car.name);
console.log(car.cost);
console.log(car.mileage);

car.start();
car.accelerate();
car.stop();  



let student = {
    name: "Archana",
    grade: 10,
    age: 21,


coding: function(){
   console.log("student stared coding");

},
singing: function(){
    console.log("student is singing");

},

dancing: function(){
    console.log("student is dancing");

}


};
console.log(student.age);

student.dancing()*/


//pass by value and pass by reference





//pass by vaule
let a = 10;
let b;
b = a;
console.log(a);
console.log(b);

//pass by reference
 let C1;
 C1 = {
    name: "kiya",
    cost: 87.5,
    mileage: 8.9
};
console.log(C1);

let C2;
 C2 = C1;
console.log(C2);


C2.name = "BMW";
console.log(C2.name);
console.log(C1.name);
