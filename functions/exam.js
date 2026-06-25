


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