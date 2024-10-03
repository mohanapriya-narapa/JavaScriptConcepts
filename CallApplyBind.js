let name={
    firstname:"mohana",
    lastname:"krishna"
}
let nametwo={
    firstname:"Priya",
    lastname:"mona"
}
let printfullname=function(homeTown,state){
    console.log(this.firstname+" "+this.lastname+" "+ homeTown+" "+state)
}

printfullname.call(name, "tirupathi","Andhra");
printfullname.apply(name, ["tirupathi","Andhra"]); //take array as i/p

let printMyName=printfullname.bind(nametwo, "tirupathi","Andhra");
printMyName();