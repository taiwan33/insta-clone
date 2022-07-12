import { Route, Routes } from 'react-router-dom'
import Homepage from '../components/Homepage'
import Message from '../components/Message'
import Upload from '../components/Upload'

const Home = () => {

    return (
        <div className='overflow-hidden flex justify-center space-x-9 pt-[6.3%] h-screen'>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/direct/inbox' element={<Message />} />
                <Route path='/upload' element={<Upload />} />
            </Routes>
        </div>
    )
}

export default Home