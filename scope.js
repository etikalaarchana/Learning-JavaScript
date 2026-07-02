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
if(temp > 25)
{
    let coolingatemp  = temp - 25;
    console.log("Sever room needss to cooled by ",coolingatemp);
}
else
{
    let heatTemp = 25 - temp;
    console.log("sever room needs to be heated by ",heatTemp);
}

console.log(temp);


