const express = require('express');

const app = express();

app.use(express.static('public'));

//Routes
app.get('/home', (req, res) => {res.sendFile(__dirname + '/views/home.html')});

app.get('/about', (req, res) => {res.sendFile(__dirname + '/views/about.html')});

app.get('/works', (req, res) => {res.sendFile(__dirname + '/views/works.html')})

app.get('/gallery', (req, res) => { res.sendFile(__dirname + '/views/gallery.html')});

// Running the server
app.listen(3000, () => {console.log('Server running on port 3000')});
