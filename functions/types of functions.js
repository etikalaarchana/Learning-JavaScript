let a=100;
let b=200;

function add()
{
    let c;
    c = a+b;
    console.log(c);
}
add();



//no input and returns output
function add() {
    let d = 40;
    let e = 20;
    return d + e;
}

console.log(add())










//input no output
function add(x, y) {
    let z= x + y;
    console.log(z);

}
let v=100;
let u=200;
add(v, u);




//input and output
function add(x, y) {
    let z = x + y;
    return z;
}
let g = 100;
let h = 200;
let res= add(g,h);
console.log(res);