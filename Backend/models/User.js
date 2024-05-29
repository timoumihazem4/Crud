import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    email: String,
    pone: String
}, { timestamp: true })
const UserModels = mongoose.model("user", userSchema)
export default UserModels