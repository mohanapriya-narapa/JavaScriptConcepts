const API_URL= "https://jsonplaceholder.typicode.com/posts";
async function handlePromise(){
    try{
const data=await fetch(API_URL);
const jsonValue=await data.json();
console.log(jsonValue)
    }
    catch(err){
        console.log(err)
    }
}

handlePromise();