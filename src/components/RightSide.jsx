import React from 'react'
import Picture from '../assets'
import Footer from './Footer'
import Suggestion from './Suggestion'

const RightSide = () => {
    return (
        <div className="mt-4 w-[25%] h-screen">
            <div className='flex justify-between items-center '>
                <div className='flex space-x-3'>
                    <div>
                        <img className='h-14 w-14 shrink-0 rounded-full object-cover' src={Picture.profile} alt="" />
                    </div>
                    <div className=' self-center'>
                        <div className='font-semibold text-sm text-stone-700'>trolls_Furba</div>
                        <div className='text-sm text-gray-500'>Original audio</div>
                    </div>
                </div>
                <div className=''>
                    <button className='flex text-xs font-medium text-blue-500'>Switch</button>
                </div>
            </div>
            <div className='flex justify-between py-4'>
                <div className='text-gray-500 text-sm font-medium'>Suggestions For You </div>
                <div>
                    <button className='text-xs'>see all</button>
                </div>
            </div>
            <div className='space-y-4'>
                <Suggestion />

            </div>
            <div className='mt-6'>
                <Footer />
            </div>
        </div>
    )
}

export default RightSide