const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
//Set default template engine
app.set('view engine', 'ejs');

//Include custom routes
const createData = require('./routes/create');
const displayData = require('./routes/display');

//To parse incoming body, without it you will get undefined value.
app.use(bodyParser.urlencoded({ extended: false }));
//To set our public files such as css and js
app.use(express.static(path.join(__dirname, 'public')));

//We tell our app to custom routes that we had included
app.use(createData.routes);
app.use(displayData);
//Default route when page is not found
app.use((req, res, next) => {
  res.status(404).render('404',
    {
      pageTitle: '404 - Page Not Found',
      path: ""
    });
});
app.listen(port, () => console.log (`Server running at http://localhost:${port}`));
