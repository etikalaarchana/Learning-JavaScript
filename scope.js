// global scope

let a;
function fun()
{
    console.log(a);
}
a = 100;
console.log(a);
fun();


//function scope
function fun()
{
    let b = 600;
    console.log(b);
}
fun();




// block scope

let temp = 30;
var coolingTemp;
var heatTemp;
if(temp > 25)
{
    coolingTemp  = temp - 25;
    console.log("Sever room needss to cooled by ",coolingTemp);
}
else
{
    heatTemp = 25 - temp;
    console.log("sever room needs to be heated by ",heatTemp);
}

console.log(temp);
console.log(coolingTemp);
console.log(heatTemp);

