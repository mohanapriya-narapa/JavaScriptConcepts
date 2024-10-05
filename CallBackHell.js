
const api = {
    getUsers: function () {
      return fetch('https://jsonplaceholder.typicode.com/users');
    },
    getPosts: function () {
      return fetch('https://jsonplaceholder.typicode.com/posts');
    }
  };
  const cart =["bags","phone","laptop"];
api.createOrder(cart, function(){
    api.proccedPayment(
        function(){
            api.orderSummary
        }
    )
})
