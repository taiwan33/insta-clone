import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { IoCreate } from "react-icons/io5";
import Picture from '../assets';
import SuggestionProfile from './SuggestionProfile';

const Message = () => {
    return (
        <div className='flex justify-center w-full border py-5'>
            <div className='w-[25%] bg-white border'>
                <div className=' flex justify-between pl-[7%] pr-3 py-4 border'>
                    <div className='flex'>
                        <div className=' font-medium'>
                            taiwan.adhikari
                        </div>
                        <div className='ml-2 '>
                            <BsChevronDown className='emoji' />
                        </div>
                    </div>
                    <div className=''>
                        <IoCreate className='emoji' />
                    </div>
                </div>
                <div className='h-screen overflow-y-scroll space-y-3'>
                    <SuggestionProfile />
                    <SuggestionProfile />
                    <SuggestionProfile />

                </div>
            </div>
            <div className='w-[48%] h-full bg-white border grid place-items-center content-center space-y-1'>
                <div className='border-2 border-black rounded-full p-3'>
                    <img className='h-16 w-auto' src={Picture.dm} alt="" />
                </div>
                <div className=' text-xl text-stone-800'>
                    Your Messages
                </div>
                <div className=' text-gray-500'>
                    Send private photos and messages to a friend or group.
                </div>
                <div className=''>
                    <button className='mt-4 bg-[#0095f6] px-2 py-1 text-white rounded-md font-medium'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Message