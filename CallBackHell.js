
const api = {
    getUsers: function () {
      return fetch('https://jsonplaceholder.typicode.com/users');
    },
    getPosts: function () {
      return fetch('https://jsonplaceholder.typicode.com/posts');
    }
  };
  const cart =["bags","phone","laptop"];
  // this structure is called pyrmaind of doom. call in a call
  //callbacks are nested within other callbacks several levels deep, making the code hard to read and maintain
api.createOrder(cart, function(){
    api.proccedPayment(
        function(){
            api.orderSummary()
        }
    )
})

// inveersion of control
//here we are giving our control on order summary to proceed to payment. losing out control to other function. Its risky. 
//its responsible of create order to call our func