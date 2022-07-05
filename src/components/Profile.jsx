import React from 'react'
import Picture from '../assets'

const Profile = () => {
    return (
        <div>
            <img className='h-7 w-7 object-cover shrink-0 rounded-full cursor-pointer' src={Picture.profile} alt="" />
        </div>
    )
}

export default Profile