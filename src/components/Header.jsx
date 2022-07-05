import React from 'react'
import Picture from '../assets'
import { MdHomeFilled, MdOutlineExplore } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsPlusSquare } from "react-icons/bs"
import { FiHeart } from "react-icons/fi"
import Profile from './Profile';

const Header = () => {
    return (
        <div className='flex justify-evenly border-b py-2 bg-white fixed top-0 w-full'>
            <div className='cursor-pointer'>
                <img className='h-10 w-auto' src={Picture.logo} alt="" />
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center pr-16'>
                    <input type='search' placeholder="Search" className='border px-3 py-1 bg-gray-200 rounded-md' />
                </div>
                <div className='flex space-x-4 justify-center items-center'>
                    <MdHomeFilled className='navitems' />
                    <RiMessengerLine className='navitems' />
                    <BsPlusSquare className='h-6 w-6 object-cover shrink-0 cursor-pointer' />
                    <MdOutlineExplore className='navitems' />
                    <FiHeart className='navitems' />
                    <Profile />
                </div>
            </div>
        </div>
    )
}

export default Header