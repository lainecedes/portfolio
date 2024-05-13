const express = require('express');
const app = express();
const port = 3000;
const path = require('path');



app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));


// Home page
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
