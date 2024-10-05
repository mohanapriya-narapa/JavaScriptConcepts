//promisse.all
//promisse.allSettled
//promisse.race
//promisse.any
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P1 Success"), 3000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("P2 Success"), 4000);
    // Uncomment the following line to reject p2 instead of resolving it
    // setTimeout(() => reject("P2 Fail"), 1000);
  });
  
  const p3 = new Promise((resolve, reject) => {
    // Uncomment the following line to resolve p3 instead of rejecting it
    // setTimeout(() => resolve("P3 Success"), 2000);
    setTimeout(() => reject("P3 Fail"), 2000);
  });

// Using Promise.race to get the first fulfilled or rejected promise
Promise.race([p1, p2, p3])
.then((res) => {
  console.log(res); // Log the result of the first resolved promise
})
.catch((err) => {
  console.error(err); // Log the error if the first promise is rejected
});