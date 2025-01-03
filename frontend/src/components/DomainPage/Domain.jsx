import React from 'react'
import { Link } from 'react-router-dom'
const Domain = () => {
  
  return (
    <div className='transform scale-90 origin-center'>
      <div className='flex justify-evenly mt-3 '>
        <div className='border-2 border-orange-500 rounded-lg shadow-lg shadow-orange-500 max-w-6xl w-full p-10 m-5 mb-2 '>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  <div className='  my-10 rounded-lg mr-10 w-64  border-2  border-orange-500 shadow-lg shadow-orange-500 hover:scale-100 transition-transform duration-300 hover:bg-orange-500 text-white px-10 py-5 flex justify-center '>
                          <Link to="/problems/software/problem-statements" >HEllo</Link>
                  </div>
                  <div className='  my-10 rounded-lg mr-10 w-64  border-2  border-orange-500 shadow-lg shadow-orange-500 hover:scale-100 transition-transform duration-300 hover:bg-orange-500 text-white px-10 py-5 flex justify-center'>
                          <Link to="/problems/software/problem-statements" >HEllo</Link>
                  </div>
                  <div className='  my-10 rounded-lg mr-10 w-64  border-2  border-orange-500 shadow-lg shadow-orange-500 hover:scale-100 transition-transform duration-300 hover:bg-orange-500 text-white px-10 py-5 flex justify-center'>
                          <Link to="/problems/software/problem-statements" >HEllo</Link>
                  </div>
                  <div className='  my-10 rounded-lg mr-10 w-64  border-2  border-orange-500 shadow-lg shadow-orange-500 hover:scale-100 transition-transform duration-300 hover:bg-orange-500 text-white px-10 py-5 flex justify-center'>
                          <Link to="/problems/software/problem-statements" >HEllo</Link>
                  </div>
                  <div className='  my-10 rounded-lg mr-10 w-64  border-2  border-orange-500 shadow-lg shadow-orange-500 hover:scale-100 transition-transform duration-300 hover:bg-orange-500 text-white px-10 py-5 flex justify-center'>
                          <Link to="/problems/software/problem-statements" >HEllo</Link>
                  </div>
                  <div className='  my-10 rounded-lg mr-10 w-64  border-2  border-orange-500 shadow-lg shadow-orange-500 hover:scale-100 transition-transform duration-300 hover:bg-orange-500 text-white px-10 py-5 flex justify-center'>
                          <Link to="/problems/software/problem-statements" >HEllo</Link>
                  </div>
                  <div className='  my-10 rounded-lg mr-10 w-64  border-2  border-orange-500 shadow-lg shadow-orange-500 hover:scale-100 transition-transform duration-300 hover:bg-orange-500 text-white px-10 py-5 flex justify-center'>
                          <Link to="/problems/software/problem-statements" >HEllo</Link>
                  </div>
                  <div className='  my-10 rounded-lg mr-10 w-64  border-2  border-orange-500 shadow-lg shadow-orange-500 hover:scale-100 transition-transform duration-300 hover:bg-orange-500 text-white px-10 py-5 flex justify-center'>
                          <Link to="/problems/software/problem-statements" >HEllo</Link>
                  </div>
                  <div className='  my-10 rounded-lg mr-10 w-64  border-2  border-orange-500 shadow-lg shadow-orange-500 hover:scale-100 transition-transform duration-300 hover:bg-orange-500 text-white px-10 py-5 flex justify-center'>
                          <Link to="/problems/software/problem-statements" >HEllo</Link>
                  </div>
            </div>
        </div>

      </div>
      <div className='flex justify-center'>

            <div className='my-10 rounded-lg w-64 border-2 border-orange-500 shadow-lg shadow-orange-500 hover:scale-100 transition-transform duration-300 hover:bg-orange-500 text-white px-10 py-5 flex justify-center items-center'>
                <button className='w-full'>Add Domain</button>
        </div>
      </div>
    </div>
  )
}

export default Domain