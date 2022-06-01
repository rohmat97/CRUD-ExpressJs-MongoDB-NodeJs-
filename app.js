const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const app = express()
const { PORT, DB_CONNECTION } = process.env
const StudentRoutes = require('./routes/student')


// middleware
app.use(bodyParser())
app.use(cors())
// route
app.use('/student', StudentRoutes);

// connect DB
mongoose.connect(DB_CONNECTION)
let db = mongoose.connection

db.on('error', console.error.bind(console, ' Databse connect Error!'))
db.once('open', ()=>{
    console.log('DB is connected');
})


// listen

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});