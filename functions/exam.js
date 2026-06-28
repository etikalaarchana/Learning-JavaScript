
// Function to calculate the grade of a student based on their marks and maximum marks

function calcGrade(student1Marks, student1MaxMarks)                                                                                                              
{  
   let student1Percentage = (student1Marks/student1MaxMarks)*100;
   let student1grade;

if (student1Percentage >= 90) {
  student1grade = "A";
} else if (student1Percentage >= 80) {
  student1grade = "B";

}else if (student1Percentage >= 70) {
    student1grade = "C";
}else if (student1Percentage >= 60){
    student1grade = "D";
}else{
    student1grade = "F";

}
console.log(student1grade);
 
}

calcGrade(85, 100);
calcGrade(75, 100);
calcGrade(63, 100);




//function declaration
function add(a,b){
  return a+b;
}
console.log(add(45,76));


//function expression
let  subtract = function(a, b) {
  return a - b;
}
console.log(subtract(45,76));


//arrow function
let mult = (a, b) =>  a * b;

console.log(mult(45, 76));


// immediately invoked function expression (IIFE)
(function examp() {
  console.log("I run when called");
  
})();

//generator function