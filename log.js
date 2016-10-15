const app = require('express')();

app.listen(process.env.PORT || 5000, () => {
  console.log("Yay! We have succeeded");
});
