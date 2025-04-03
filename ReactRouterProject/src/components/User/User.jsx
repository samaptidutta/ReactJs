import React from 'react'
import { useParams } from 'react-router-dom'
function User() {

    const {userid}= useParams()
    

    return (
        <div className='text-center bg-amber-100 p-3 text-3xl text-amber-950'>
            User : {userid}
        </div>
    )
}

export default User
