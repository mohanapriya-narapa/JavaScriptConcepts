let nameone={
firstname:"mohana",
lastname:"priya"
}
let printname=function(hometown,state)
{
    console.log(this.firstname+" "+this.lastname+" "+hometown+" "+ state);
}
let printMyName=printname.bind(nameone, "tirupathi","AP","India" );
// printMyName();

Function.prototype.myBind=function(...args)
{let obj=this
    params=args.slice(1);
    return function(...args2)
    {
obj.apply(args[0], [...params, ...args2]);
    }
}
let printMyNametwo=printname.myBind(nameone, "tirupathiii");
printMyNametwo("AP");