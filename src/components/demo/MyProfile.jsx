import { useEffect, useState } from "react"
import { getUsers } from "./api/CallUsersApi"

function MyProfile() {

    const[users, setUsers] = useState([])

    useEffect (() => refreshUsers(), [])

    function refreshUsers(){
        getUsers('1')
        .then(response => {
            setUsers(response.data.data)
        })
        .catch(error => console.log(error))

    }

    return (
        <>
        <img className="rounded-circle" src={users.avatar} alt=""></img>
            <div className="card-body">
                <h5 className="card-title">Profile</h5>
                <h1 className="card-text">{users.first_name}{users.last_name}</h1>
                <h1 className="card-text">{users.email}</h1>
            </div>
        </>
    )
}

export default MyProfile