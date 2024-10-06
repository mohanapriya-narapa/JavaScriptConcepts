let user = {
    name: "Akshay Saini",
    address: {
      personal: {
        city: "Dehradun",
        state: "Uttrakhand",
        area: "Majra",
      },
      office: {
        city: "Hyderabad",
        area: {
          landmark: "Hi Tech",
        }
      }
    }
  };
let finalObj={};
recursive(user,"user", finalObj);
function recursive (obj, parent, finalobj)
{
    for(let key in obj){
if(typeof(obj[key])==="object")
{
    recursive(obj[key],parent+"_"+key , finalobj);
}
else{
    finalobj[parent+"_"+key]=obj[key];
}
    }
}
console.log(finalObj);