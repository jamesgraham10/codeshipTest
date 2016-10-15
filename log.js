const app = require('express')();

app.get('/', function (req, res) {
    res.send('Hello Codeship!');
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Yay! We have succeeded");
});
