const express = require('express');
const app =express();
const port=3001;
const mongoose = require('mongoose')
const bookRoute = require('./routes/booksRoute');
const studentRoute = require('./routes/studentsRoute'); 
const borrrowRoute = require('./routes/borrowRoute');

app.use(express.json())
app.use('/books',bookRoute);
app.use('/students',studentRoute);
app.use('/borrow', borrrowRoute);



mongoose.connect('mongodb://localhost:27017/libappDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);   
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})