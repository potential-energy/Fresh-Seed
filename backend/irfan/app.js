const express = require('express');
const ejs = require("ejs");
const pageRoute = require('./routes/pageRoute');
const userRoute = require('./routes/userRoute');


const app = express();


// Template Engine
app.set("view engine", "ejs");


//Middlewares
app.use(express.static('public'));

//Routes

app.use('/', pageRoute);
app.use('/users', userRoute);



const port = 3000;

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
