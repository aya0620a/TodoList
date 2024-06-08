import React from 'react'
import SignIn from './components/Login/SignIn'

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-cover w-full h-screen bg-custom-image'>
            <h1 className='text-6xl underline font-bold mb-8 text-black'>MY-TODO</h1>
            <SignIn />
        </div>
    )
}

export default Home