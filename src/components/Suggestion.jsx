import React from 'react'
import Picture from '../assets'

const Suggestion = () => {
    return (
        <div className='flex justify-between items-center '>
            <div className='flex space-x-3'>
                <div>
                    <img className='h-8 w-8 shrink-0 rounded-full' src={Picture.profile} alt="" />
                </div>
                <div className=' self-center'>
                    <div className='font-semibold text-sm text-stone-700'>trolls_Furba</div>
                    <div className='text-xs text-gray-400'>New to instagram</div>
                </div>
            </div>
            <div className=''>
                <button className='flex text-xs font-medium text-blue-500'>Follow</button>
            </div>
        </div>
    )
}

export default Suggestion