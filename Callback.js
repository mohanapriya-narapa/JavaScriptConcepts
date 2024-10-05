//A func passed as arg to another func is called call back
// A func which acceps func as an arg and returns a func is called higher order func

function greet(name)
{
    console.log("welcome" +" " +name);
}

function higherOrderFunction(callback)
{
const name ="mohana";
callback(name);
}
higherOrderFunction(greet);