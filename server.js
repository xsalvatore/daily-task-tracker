const express = require('express');
const mongoose = require('mongoose');
const body_parser = require('body-parser');
const path = require('path');

const tasks = require('./routes/api/tasks');

const app = express();

// body-parser middleware
app.use(body_parser.json());

// need to create these files & folders
const db = require('./config/keys').mongoURI;

// connect to mongo using mongoose
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("mongodb is connected"))
    .catch(err => console.log(err));

// use routes
app.use('/api/tasks', tasks);

// serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on ${port}`));