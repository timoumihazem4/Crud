import express from "express"
import { createuser, GetUser, UpdateUser, DeleteUser } from "../controller/UserController"
const routers = express.Router()

routers.post('/create', createuser)
routers.get('/get', GetUser)
routers.put('/update/:id', UpdateUser)
routers.delete('/delete/:id', DeleteUser)







export default routers