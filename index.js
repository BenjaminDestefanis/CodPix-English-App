const express = require("express")
const app = express()


app.get('/', (req, res) => {
    res.send('Coneccion Con express! Firs Route')
})
const PORT = 3456

app.listen(PORT, () => {
    console.log(`Listen on PORT=${PORT} ...`)
})