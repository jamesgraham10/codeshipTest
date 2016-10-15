const app = require('express')();

app.listen(3000 | process.env.PORT, () => {
  console.log("Yay! We have succeeded");
});
