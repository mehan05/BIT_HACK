import React from 'react'

const ProblemDescription = () => {
  return (
    <div>
        <div className=' p-6 border-2 border-orange-500 shadow-lg shadow-orange-500 rounded-lg mr-5 ml-5  mt-5'> 
            <h1 className='text-3xl font-bold '>Problem Title</h1>
            <p className='text-justify leading-relaxed text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi adipisci tempora sapiente esse debitis fuga voluptatum enim ipsum harum ullam repellendus officiis quaerat quia, eligendi, sed porro, aperiam deleniti iure!</p>

            <div className='flex justify-center'>

            <button className='   mt-6 border-2 border-orange-500 shadow-lg shadow-orange-500 rounded-lg hover:bg-orange-500 text-white  hover:scale-x-150 transition-transform duration-300 pt-4 pb-4 w-[500px]'>Register</button>
            </div>
        </div>
    </div>
  )
}

export default ProblemDescription