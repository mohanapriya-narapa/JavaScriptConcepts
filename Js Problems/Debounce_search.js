function debounce(fn, delay) {
    // Keep track of the timer
    let timer;
  
    // Return a debounced version of the function
    return function(...args) {
      // Clear the previous timer
      clearTimeout(timer);
  
      // Create a new timer that will execute `fn` after the delay period
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }
  
  // Example usage
  function searchQuery(query) {
    console.log("Searching for:", query);
  }
  
  // Create a debounced version of the `searchQuery` function with a 300ms delay
  const debouncedSearch = debounce(searchQuery, 300);
  
  // Simulate user typing
  debouncedSearch("a");
  debouncedSearch("ab");
  debouncedSearch("abc");