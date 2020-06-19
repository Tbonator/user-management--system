const express = require('express')
const mongoose = require('mongoose')
const UserRoutes = require('./routes/UserRoutes')
const app = express()
var cors = require('cors')



const PORT = process.env.port || 3000; 

//Database
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://127.0.0.1:27017/user-manager',{ useNewUrlParser: true })
    .then(() => { console.log(`connected to mongoose`) })
    .catch( (err) => { console.error.err})

//Middleware
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())


//Routes
app.use('/api', UserRoutes);





//Server
app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`)
})