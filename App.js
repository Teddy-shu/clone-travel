const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use('/', express.static(__dirname + '/res'));
app.use('/', express.static(__dirname + '/views'));
app.use('/', express.static(__dirname + '/node_modules'));

app.get('/', (req, res) => {
  res.render('index', {
    title: "Hello WOrld"
  });
});

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
