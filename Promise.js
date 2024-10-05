// container for a future value. promise is a obj representing eventual completion or failure of an async operation/event
//pyramid of doom
const cart =["bags","phone","laptop"];
createOrder(cart, function(orderId)
{
proceedToPayment(orderId, function(){
    showOrderSummary(paymentInfo, function(){
        updateWalletBalance();
    });
});
});

// const promise= createOrder(cart);
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// })
createOrder(cart).
then(function(orderId){
   return proceedToPayment(orderId);
}).
then(function(paymentInfo){
   return showOrderSummary(paymentInfo);
})
.then(function(){
   return updateWalletBalance();
})