//Create a function the returns a function that increements and returns a counter


function createCounter() {
    let counter = 0;
   function incrementCounter() {
     return ++counter;
   }
   return incrementCounter;
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());