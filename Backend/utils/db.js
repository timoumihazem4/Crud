import mongoose from "mongoose";


const URL = "mongodb://localhost:27017/curd"

const dbCon = async () => {
    try {
        await mongoose.connect(URL)
        console.log('mongodb is connected')
    } catch (error) {
        console.log('mongodb is not connected')

    }
}

export default dbCon