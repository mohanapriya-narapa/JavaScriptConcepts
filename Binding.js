// implicit binding
const person =
{
    name:'mohana',
    sayMyName: function(){
        console.log(`my name is ${this.name}`);
    },
}

person.sayMyName();

// explicit binding


