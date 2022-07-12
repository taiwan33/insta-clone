import React from 'react'

const Stories = ({ users }) => {
    // console.log(users);
    return (
        <div className='w-full'>
            <div className='flex flex-nowrap no-scrollbar overflow-x-scroll space-x-5 py-5 border pl-5 rounded-lg'>
                {
                    users.map((item, i) => {
                        return (
                            <div key={i} className='space-y-2 flex-shrink-0'>
                                <img className='profile' src={item.profileurl} alt="" />
                                <p className='text-xs text-gray-700'>{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Stories