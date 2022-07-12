import React from 'react'
import Picture from '../assets'

const SuggestionProfile = () => {
    return (
        <div className='flex space-x-3 px-4 pt-3 cursor-pointer'>
            <div>
                <img className='h-14 w-14 shrink-0 rounded-full' src={Picture.profile} alt="" />
            </div>
            <div className=' self-center'>
                <div className='font-semibold text-sm text-stone-700'>trolls_Furba</div>
                <div className='text-xs text-gray-400 flex space-x-2'>
                    <div>Hell0! </div>
                    <div>1h</div>
                </div>
            </div>
        </div>
    )
}

export default SuggestionProfile