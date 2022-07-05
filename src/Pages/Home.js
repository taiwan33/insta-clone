import React from 'react'
import Body from '../components/Body'
import RightSide from '../components/RightSide'

const Home = () => {
    return (
        <div className='overflow-hidden flex justify-center space-x-9 pt-[6.3%] h-screen'>
            <Body />
            <RightSide />
        </div>
    )
}

export default Home