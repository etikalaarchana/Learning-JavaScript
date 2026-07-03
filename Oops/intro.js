  let car;
  car = {
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
