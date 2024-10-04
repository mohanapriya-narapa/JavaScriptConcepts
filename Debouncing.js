const getData =()=>
{
    console.log("fetching data");
}


const debounce=function(fn,d)
{let timer;
return function()
{
    clearTimeout(timer);
    timer=setTimeout(()=>{
fn();
    },d)
};
}
const betterFunction = debounce(getData, 2000);
betterFunction();
betterFunction();