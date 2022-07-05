import React from 'react'
import { FiHeart } from "react-icons/fi"
import { FaRegComment, FaTelegramPlane } from "react-icons/fa"
import { BsBookmark, BsEmojiSmile } from "react-icons/bs"
import { db } from "../configure"
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

const Post = () => {
    const [users, setUsers] = useState([]);
    const names = collection(db, "apiforinstagram")
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(names);
            setUsers(data.docs.map((item) => ({ ...item.data() })))
        }
        getUsers()
    }, [])
    return (
        <div className=' rounded-lg w-full '>
            {users.map((user, i) => {
                return (
                    <div key={i} className="mt-4 rounded-lg border">
                        <div className='flex justify-between py-3 px-4' >
                            <div className='flex space-x-3'>
                                <div>
                                    <img className='h-11 w-11 shrink-0 cursor-pointer rounded-full outline outline-offset-2 outline-2 object-cover outline-red-500' src={user.profileurl} alt="" />
                                </div>
                                <div className=''>
                                    <div className='cursor-pointer font-semibold text-gray-800'>{user.name}</div>
                                    <div className='text-xs'>Original audio</div>
                                </div>
                            </div>
                            <div className='text-2xl cursor-pointer'>
                                ...
                            </div>
                        </div>
                        <div>
                            <img className='h-[430px] w-full' src={user.imageurl} alt="" />
                        </div>
                        <div className='mx-3 mt-3 space-y-2 text-sm'>
                            <div className='flex justify-between '>
                                <div className='flex space-x-4 '>
                                    <FiHeart className='emoji' />
                                    <FaRegComment className="emoji" />
                                    <FaTelegramPlane className="emoji" />
                                </div>
                                <div>
                                    <BsBookmark className="emoji" />
                                </div>
                            </div>
                            <div className='font-medium cursor-pointer'>{user.likes} Likes</div>
                            <div className='flex space-x-2'>
                                <div className='font-medium cursor-pointer'>{user.name}</div>
                                <div>
                                    {user.status}
                                </div>
                            </div>
                            <div className='text-gray-500 cursor-pointer'>View all {user.comments} comments</div>
                            <div className='text-gray-500 text-xs text-tighter'>1 Hours Ago</div>
                            <div className='flex justify-between border-t py-3'>
                                <div className='flex'>
                                    <div className='flex px-3 space-x-3'>
                                        <div>
                                            <BsEmojiSmile className='emoji' />
                                        </div>
                                        <div>
                                            <input className='pr-[140px] focus:outline-none' type='text' placeholder="Add a comment..." />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className='text-blue-400'>Post</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Post