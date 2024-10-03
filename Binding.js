// implicit binding
const person =
{
    name:'mohana',
    sayMyName: function(){
        console.log(`my name is ${this.name}`);
    },
}

// person.sayMyName();

// explicit binding

function sayMyName()
{
    console.log(`my is name is ${this.name}`);
}
// sayMyName.call(person);

//new binding

function Person(name)
{
    this.name =name
}
const p1=new Person('mohana');
const p2=new Person('priya')
console.log(p1.name, p2.name);

//default binding will rely on global scope
sayMyName()

//prority
//new binding
//explict binding
//implict binding
//default binding