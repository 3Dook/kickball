const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose');
// 
require('dotenv').config()
const PORT = process.env.PORT || 5001;
const URI = process.env.URI || 'mongodb://localhost:27017/slosh';

// Configurations || middleware
app.use(cors())
app.use(express.json())

//Database
mongoose.connect(URI,
    );
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log("MongoDB database connection established successfully");
    })

//routes
app.use('/api', require('./routes/players'));
/* app.use('*', (req, res)=>{
    res.status(200).json("Please use /api backend")
}) */


if(process.env.NODE_ENV==="production"){
    app.use(express.static('../client/build'));
    app.get('/*', function(req,res) {
		res.sendFile(path.join(__dirname.slice(0,-7),'client', 'build', 'index.html'));
    });
}

app.listen(PORT, ()=>{
    console.log(`server has started on port ${PORT}`)
})
