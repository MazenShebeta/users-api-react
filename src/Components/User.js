import react from 'react'
import './User.css'

const User = (props) =>{
    return(
        <div className='User'>
            <h1>{props.user.name}</h1>
            <h3>{props.user.username}</h3>
            <h3>{props.user.email}</h3>
            <h3>{props.user.phone}</h3>
            //add link
            <a href={`http://${props.user.website}`}>{props.user.website}</a>
            <p>{props.user.address.street}</p>
            <p>{props.user.address.city}</p>
            
        </div>
    )
}

export default User