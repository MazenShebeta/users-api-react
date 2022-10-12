import react from 'react'
import axios from 'axios'
import User from './User'
import {useState, useEffect} from 'react'
import './UserList.css'



const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            setUsers(res.data)
            setLoading(false)
            setError('')
        })
        .catch(err => {
            setUsers([])
            setLoading(false)
            setError('Something went wrong')
        })
    }, [])
    return (
        <div className='UserList'>
            {loading ? 'Loading' : users.map(user => <User user={user} />)}
            {error ? error : null}
        </div>
    )
}

export default UserList