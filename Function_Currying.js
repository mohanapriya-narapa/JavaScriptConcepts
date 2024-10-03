// let multiply=function(x,y){
// console.log(x*y);
// }
let multiply=function(x)
{
    return function(y){
        console.log(x*y)
    }
}
const multiplyOne =multiply(2);
multiplyOne(3); 