

function add(a,b)
{
    return a+b;
}

console.log("Addition: ", add(10, 20));
function sub(a,b)
{
    return a-b;
}
console.log("Subtraction: ", sub(20, 10));
 function mul(a,b)
{
    return a*b;
}
console.log("Multiplication: ", mul(10, 20));
console.log("Multiplication: ", mul(30,47));
function div(a,b)
{
    if(b === 0){
         return "Cannot divide by zero";
    }
    return a/b;
    
}
console.log("Division: ", div(20, 10));