const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const hamsters = require('./routes/hamsters.js')
const matches = require('./routes/matches.js')
const matchWinners = require('./routes/matchWinners.js')
const winners = require('./routes/winners.js')
const losers = require('./routes/losers.js')

const PORT = process.env.PORT || 1339
const buildFolder = path.join(__dirname, '../build')
/* const staticImgFolder = path.join(__dirname, 'img') */

//Middleware
app.use( express.json() )
app.use( cors() )
app.use( express.static(buildFolder) )
/* app.use( '/img', express.static(staticImgFolder) ) */

app.use((req, res, next) =>{
	console.log(`${req.method} ${req.url}`, req.params);
	next()
})

// Routes
app.get('/', (req, res) => {
	res.send('Firebase hamsterwars-assignment')
})


// REST API for /hamsters
app.use('/hamsters', hamsters)
app.use('/matches', matches)
app.use('/matchWinners', matchWinners)
app.use('/winners', winners)
app.use('/losers', losers)

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})