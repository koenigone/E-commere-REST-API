const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    res.send('something to test')
})

const PORT = 3000
app.listen(PORT, (req, res)=> {
    console.log(`Server is listening on PORT ${PORT}`)
})