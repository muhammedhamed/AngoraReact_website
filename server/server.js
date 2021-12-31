require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')


app.use(express.json());
app.use(cors());

app.use('/user' ,require('./routes/user'))
app.use('/course' ,require('./routes/course'))
app.use('/image' ,require('./routes/upload'))
app.use('/category' ,require('./routes/category'))
app.use('/payment' ,require('./routes/Payment'))

const URI = process.env.mongodb
mongoose.connect(URI,{
    useNewUrlParser: true
}, error =>{
    if (error) {
        throw error
    } else {
        console.log('Connecting to Mongodb....')
    }
})

const PORT = process.env.PORT || 5500
app.listen(PORT, () =>{
    console.log('Server is running......')
})

