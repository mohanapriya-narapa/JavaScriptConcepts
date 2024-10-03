let object={
    name:"mohana",
    city:"dallas",
    getIntro: function(){
        console.log(this.name +"from "+ this.city);
    }
}
let object2={
    name:"priya"
}
object2.__proto__=object;
console.log(object2.getIntro())