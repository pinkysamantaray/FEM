import express from 'express'
import setupMiddware from './middleware'
import { restRouter } from './api'
import { connect } from './db'
import { signin, protect } from './api/modules/auth'
// Declare an app from express
const app = express()

const apiRouter = express.Router()
apiRouter.get('/', (req, res) => {
    res.json({api:true})
})
apiRouter.all('*', (req, res) => {
    res.json({apiAll : true})
})
/* apiRouter.get('/things', (req, res) => {
    res.json({
        api: true
    })
}) */
app.use('/api', apiRouter)

app.get('*', (req, res) => {
    res.json({OK: true})
})

app.listen('3000', () => {
    console.log("http://localhost:3000")
})

export default app
