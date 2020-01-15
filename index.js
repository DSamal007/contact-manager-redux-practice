const express = require('express')
const configureDB  = require('./config/database')
const cors = require('cors')

const router = require('./config/routes')
const app = express() 
const port = 3050

configureDB()

app.use(cors())
app.use(express.json())

app.use('/', router)

app.listen(port, function(){
    console.log('listening on port', port)
})