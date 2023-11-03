const express = require('express')

// In many environments (e.g. Heroku), and as a convention, 
// you can set the environment variable PORT to tell your web server what port to listen on.
const PORT = process.env.PORT || 3001

const app = express()

app.get('/api', (req, res) => {
    res.json({ message : "Hello from server !"})
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})


