// global scope

/*let a;
function fun()
{
    console.log(a);
}
a = 100;
console.log(a);
fun();
*/

//function scope
function fun()
{
    let b = 600;
    console.log(b);
}
fun();
console.log(b);