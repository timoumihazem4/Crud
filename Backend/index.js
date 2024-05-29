import express from 'express'
import dbCon from './utils/db'
import dotenv from 'dotenv'
import cors from 'cors'
import routers from './routes/routes'
dotenv.config()


const app = express

dbCon()
app.request(express.json())
app.request(cors())
app.request('/api', routers)
app.listen(3031, () => {
    console.log('server is running on port 3031')
})