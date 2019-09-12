import path from 'path'
import { Router } from 'express'
const router = new Router()

router.get('/*', (req, res) => {
	res.sendFile(path.resolve(__dirname + '/../public/index.html'))
})

export default router
