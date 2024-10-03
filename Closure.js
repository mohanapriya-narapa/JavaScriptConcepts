let a=10;
function outer(){
    let b=12;
function inner()
{
    let c=15;
    console.log(a,b, c);
}
inner()
}
outer()