/* require */
const express = require('express')
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const path = require('path');
const logger = require('morgan');
var cors = require('cors');
app.use(cors());
var items = require('./descriptor.json');
//const PORT = process.env.PORT || 5000;
app.set('port', process.env.PORT || 5000);

/* app.use */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* use for sending titles's forms for frontend */
app.get('/api/forms', function(req, res) {

    res.json(items);

})

/* use for sending details of forms for frontend */
app.get('/api/forms/:id', function(req, res) {

    var isThere = true;

    for (var i = 0; i < items.items.length; i++) {
        if (items.items[i].id === req.params.id) {
            isThere = false;
            res.json(items.items[i]);
        }
    }

    if (isThere) {
        res.json("there is not any id");
    }

})

/* use for getting information from frontend */
app.post('/getData', function(req, res) {

    console.log("\n" + "/* form details */" + "\n")
    for (var i = 0; i < Object.keys(req.body).length; i++) {
        console.log(Object.keys(req.body)[i] + " : " + Object.values(req.body)[i])
    }

});


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(app.get('port'));

//app.listen(PORT);