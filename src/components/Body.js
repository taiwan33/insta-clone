import React from 'react'
import Post from './Post'
import Stories from './Stories'
import { db } from "../configure"
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

const Body = () => {
    const [users, setUsers] = useState([]);
    const names = collection(db, "apiforinstagram")
    // console.log(users);            
    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(names);
            setUsers(data.docs.map((item) => ({ ...item.data() })))
        }
        getUsers()
    }, [])
    return (
        <div className='w-[36%] overflow-y-scroll no-scrollbar'>
            <Stories users={users} />
            <Post />
        </div>
    )
}

export default Body