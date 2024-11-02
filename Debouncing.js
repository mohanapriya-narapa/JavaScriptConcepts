const getData =(msg)=>
{
    console.log("fetching data", msg);
}


const debounce=function(fn,d)
{let timer;
return function(...args)
{
    clearTimeout(timer);
    timer=setTimeout(()=>{
fn.apply(this,args);
    },d)
};
}
const betterFunction = debounce(getData, 2000);
betterFunction("hello");

//if difference between 2 key strokes is 300 ms then make a call