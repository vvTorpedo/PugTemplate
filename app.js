const express = require(`express`)
const app = express()
const cookies = require("cookies")
const rootRoutes = require(`./routes/root-routes`)
const config = require('./config.json')

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.use(cookies.express('a', 'b', 'c'))

app.use(express.static(__dirname))

app.use('/', rootRoutes)

app.listen(config.port, () => console.log(`Server hosted on http://localhost:${config.port}`))