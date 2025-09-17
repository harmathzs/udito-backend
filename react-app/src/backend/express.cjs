const express = require('express')
const path = require('path')
const app = express()

app.use((req, res)=>{
    res.status(404).sendFile(path.join(__dirname, 'error.html'))
})

const port = 3333
app.listen(port, ()=>{
    console.log('Express backend server is running on port', port)
})