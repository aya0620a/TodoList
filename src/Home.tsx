import SignIn from './components/Login/SignIn'

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center bg-cover w-full h-screen bg-custom-image'>
            <h1 className='text-5xl md:text-8xl font-bold mt-5 mb-10 text-black'>MY-TODO</h1>
            <SignIn />
        </div>
    )
}

export default Home