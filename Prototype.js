function Person(fName, lName)
{
    this.firstName =fName;
    this.lastName=lName;
}
const person1 = new Person("mohana", "priya");
const person2= new Person("krishna", "priya");
// person1.getFullName= function(){
//     return this.firstName+" "+ this.lastName;
// }

Person.prototype.getFullName=function()
{
        return this.firstName+" "+ this.lastName;
    }
console.log(person1.getFullName());
console.log(person2.getFullName());
