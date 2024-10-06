const p=new Promise(function(resolve,reject){
resolve("promise resolved value");
})

//await can be only used inside an async await function
async function getDataAsync(){
    const val=await p;
    console.log(val);
}

// traditional way to handle promise without async / await
function getData()
{
    p.then(function(res){
        console.log(res);
    })
}
// getData();
getDataAsync();