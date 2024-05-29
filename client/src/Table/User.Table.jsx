import React from "react"
import Table from "../Component/Table"
import AddUser from "../Component/addUser"
import UpdateUser from "../Component/EditUser"

export default function UserTable() {
    return (
        <div>
            <Table />
            <AddUser />
            <UpdateUser />

        </div>
    )
}