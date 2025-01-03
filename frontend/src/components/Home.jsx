import React from 'react'
import WinnersCard from './WinnersCard/WinnersCard'
import Footer from './footer/Footer'

const Home = () => {
  return (
    <div >
        <div className='flex justify-center p-3'>

        <div className='border-2 border-orange-500 shadow-lg shadow-orange-500 rounded-lg m-6  w-full p-6'>

        <h1 className='flex justify-center items-center font-extrabold text-6xl mt-5 mb-5 '>Welcome To BITHACK </h1>
        <p className='text-justify leading-relaxed text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, labore illum asperiores sunt odit quam eum quasi eveniet deleniti magnam ab corporis, numquam accusamus soluta eius libero, delectus officia totam!
        Sed possimus rerum assumenda doloremque, illo quos, suscipit iure beatae temporibus, optio deserunt magnam totam unde consequatur repellat perferendis pariatur dolor. Quaerat voluptatem illum quibusdam placeat enim! Obcaecati, aliquid ratione!</p>

        </div>
        </div>

        <div className=' border-2  border-orange-500 shadow-lg shadow-orange-500 rounded-lg  mb-10 mr-4 ml-4'>
            <h1 className=' text-5xl p-5 mb-5 flex justify-center font-bold '>Winners </h1>

            <div className='p-5 m-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-4 '>
                    <WinnersCard/>
                    <WinnersCard/>
                    <WinnersCard/>
            </div> 
        </div>
        <Footer/>
    </div>
  )
}

export default Home