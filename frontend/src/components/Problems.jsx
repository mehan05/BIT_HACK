import React from 'react'
import { Link } from 'react-router-dom'

const Problems = () => {
  return (
    <div className='flex justify-center h-screen items-center  w-full'>

        <div className=' text-lg  border-2 border-orange-500 rounded-lg shadow-lg shadow-orange-500 min-w-[20rem] min-h-[5rem] flex items-center justify-center  mr-10 hover:scale-105 transition-transform   hover:bg-orange-500 text-white hover:text-2xl'>
            <Link to='/problems/software' className='flex justify-center ' >Hardware</Link>
        </div>

        <div className='text-lg border-2 border-orange-500 rounded-lg shadow-lg shadow-orange-500 min-w-[20rem] min-h-[5rem]  hover:scale-105 transition-transform   hover:bg-orange-500 text-white hover:text-2xl'>
            <Link to='/problems/software'  className='flex justify-center mt-5'> Software</Link>
        </div>

    </div>
  )
}

export default Problems