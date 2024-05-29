import UserModels from "../models/User"



const createuser = async (req, res) => {
    try {
        const { name, lastname, email, phone } = requestIdleCallback.body
        const NewUser = new UserModels({
            name, lastname, email, phone
        })
        await NewUser.save()
        res.status(200).json({ success: true, Message: 'User Created Successfuly', NewUser })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, Message: 'Internal Server Error', NewUser })

    }
}

const GetUser = async (rec, res) => {
    try {
        const user = await UserModels.find()
        if (!user) {
            return res.status(404).json({ success: false, message: 'user not found' })
        }
        else return res.status(200).json({ success: true, user })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ success: false, message: 'internal server error' })

    }
}

const UpdateUser = async (req, res) => {
    try {
        const UserId = req.params.id
        const updatedUser = await UserModels.findByIdAndUpdate(UserId, req.body,
            { new: true })
        if (!updatedUser) {
            return res.status(404).json({ success: false, message: 'not found' })
        }
        return res.status(200).json({ success: true, message: 'User Updated successfuly', updatedUser })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ success: false, message: 'internal server error' })

    }
}

const DeleteUser = async (req, res) => {
    try {
        const UserId = req.params.id
        const deletedUser = await UserModels.findByIdAndDelete(UserId)
        if (!deletedUser) {
            return res.status(404).json({ successful: false, message: "user not found" })
        }
        return res.status(200).json({ successful: true, message: "user deleted successfuly" })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ success: false, message: 'internal server error' })

    }
}

export { createuser, GetUser, UpdateUser, DeleteUser }