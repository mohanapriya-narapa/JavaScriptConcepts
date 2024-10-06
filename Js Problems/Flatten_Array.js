const data = {
    a: 1,
    b: { c: 2, d: { e: 3, f: 4 }, g: [5, 6, 7] },
    h: 8,
  };
let finalObj={};
const flattenOnj=flattenArray(data,"",finalObj);
function flattenArray(obj, parent, finalObj)
{
    for(let key in obj)
    {
        if(typeof(obj[key])==="object")
        {
            flattenArray(obj[key],parent+"_"+key, finalObj );
        }
        else{
            finalObj[parent+"_"+key]=obj[key];
        }
    }
}
console.log(finalObj);