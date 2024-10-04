const iterableObject={
    [Symbol.iterator]:function(){
        let step=0;
        return {
           next:function(){
            step++;
            if(step==1)
            {
                return {value:"first", done:false}
            }
            else if(step==2)
            {
                return {value:"second", done:false}
            }
            return {value:undefined, done:true}
           } 
        };
    }
}

for(let value of iterableObject)
{
    console.log(value)
}