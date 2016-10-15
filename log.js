const app = require('express')();

app.listen(3000 | process.env.PORT, () => {
  var num = 0;
  setInterval( () => {
    if (num % 3 === 0 && num % 5 === 0) { console.log(`${num}: Fizzbuzz`) }
    else if ( num % 3 === 0) { console.log(`${num}: Fizz`) }
    else if ( num % 5 === 0) { console.log(`${num}: Buzz`) }
    else { console.log(num); }
    num += 1;
  }, 1000);
});
