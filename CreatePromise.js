const cart =["bags","phone","laptop"];
createOrder(cart)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
console.log(paymentInfo)
})
.catch(function(err){
    console.log(err.message);
})
function validateCart(cart)
{
    return true;
}
function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("payment successful");
    });
}
function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
if(!validateCart(cart))
{
    const err=new Error("Cart is not valid");
    reject(err);
}
else{
    const orderId="45678";
    if(orderId)
        setTimeout(function(){resolve(orderId);
    }, 5000)
        
}
    });
    return pr;
}