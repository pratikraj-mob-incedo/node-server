import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'
import { errorHandler as queryErrorHandler } from 'querymen'
import { errorHandler as bodyErrorHandler } from 'bodymen'

import router from './routes'

const config = {
	port: process.env.PORT || 3000,
	env: process.env.NODE_ENV || 'development',
	ip: '0.0.0.0',
}

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', router)

app.use(queryErrorHandler())
app.use(bodyErrorHandler())

const server = http.createServer(app)

server.listen(config.port, config.ip, () => {
	console.log('Express server listening on http://%s:%d, in %s mode', config.ip, config.port, config.env)
})

export default app