const numbers=[1, 2, 3, 4, 5, 6];
const evenNumbers=numbers.filter(num=>num%2==0)
console.log(evenNumbers)
const squaredNumbers=numbers.map(num=>num*num);
console.log(squaredNumbers)
const users = [
    { id: 1, name: 'John', age: 28, city: 'New York' },
    { id: 2, name: 'Jane', age: 22, city: 'Los Angeles' },
    { id: 3, name: 'Mike', age: 32, city: 'Chicago' },
    { id: 4, name: 'Sara', age: 25, city: 'New York' },
    { id: 5, name: 'Chris', age: 30, city: 'San Francisco' }
  ];

const usersInNewyork=users.filter(user=>user.city=='New York')
console.log(usersInNewyork);

const namesOfOlderUsers=users.map(user => user.name);
console.log(namesOfOlderUsers);

const filteredUsers=users.filter(user=>user.city=='New York').map(user => user.name);
console.log(filteredUsers);


const sum=numbers.reduce((acc,cur)=>{
    return acc+cur;
},0);
console.log(sum);

const product=numbers.reduce((prod,cur)=>{
    return prod*cur;
})
console.log(product);

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const countFruits=fruits.reduce((acc, cur)=>{
if(acc[cur])
{
    acc[cur]++;
}
else{
    acc[cur]=1;
}
    return acc;
},{})
console.log(countFruits);

const people = [
    { name: 'John', age: 21 },
    { name: 'Jane', age: 18 },
    { name: 'Mike', age: 25 },
    { name: 'Sara', age: 18 },
    { name: 'Chris', age: 21 }
  ];
const groupByAge=people.reduce((acc,person)=>{
    if(!acc[person.age])
    {
        acc[person.age]=[];
    }

acc[person.age].push(person);


    return acc;
}, {})


console.log(groupByAge);
for (let x in groupByAge )
{
    console.log(groupByAge[x]);
}