const express = require('express')
const cors = require('cors')
const cultureRoutes = require('./routes/cultureRoutes')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  // x-www-form-urlencoded를 사용하면 필요

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to 문화공공데이터광장' })
})

app.use('/cultureRoutes', cultureRoutes)

app.listen(PORT, () => console.log(`The server is running at ${PORT}`))