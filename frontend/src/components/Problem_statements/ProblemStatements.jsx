import React from 'react'
import { Link } from 'react-router-dom'

const ProblemStatements = () => {
  return (
    <div>
      <div className='p-8 mr-5 ml-5 border-2 border-orange-500 rounded-lg shadow-lg shadow-orange-500 mb-10'>

        <h1 className='text-3xl font-bold flex justify-center mb-9'>Problem Statements</h1>

        <Link to="/problems/software/problem-statements/problemstatement/:id">
          <div className='mb-6 w-full p-5 border-2 border-orange-500 rounded-lg shadow-lg shadow-orange-500 hover:bg-orange-500 text-white hover:scale-105 transition-transform duration-300'>
            Statement-1
          </div>
        </Link>

        <Link to="/problems/software/problem-statements/problemstatement/:id">
          <div className='mb-6 w-full p-5 border-2 border-orange-500 rounded-lg shadow-lg shadow-orange-500 hover:bg-orange-500 text-white hover:scale-105 transition-transform duration-300'>
            Statement-2
          </div>
        </Link>

        <Link to="/problems/software/problem-statements/problemstatement/:id">
          <div className='mb-6 w-full p-5 border-2 border-orange-500 rounded-lg shadow-lg shadow-orange-500 hover:bg-orange-500 text-white hover:scale-105 transition-transform duration-300'>
            Statement-3
          </div>
        </Link>

        <Link to="/problems/software/problem-statements/problemstatement/:id">
          <div className='mb-6 w-full p-5 border-2 border-orange-500 rounded-lg shadow-lg shadow-orange-500 hover:bg-orange-500 text-white hover:scale-105 transition-transform duration-300'>
            Statement-4
          </div>
        </Link>

        <Link to="/problems/software/problem-statements/problemstatement/:id">
          <div className='mb-6 w-full p-5 border-2 border-orange-500 rounded-lg shadow-lg shadow-orange-500 hover:bg-orange-500 text-white hover:scale-105 transition-transform duration-300'>
            Statement-5
          </div>
        </Link>

      </div>
    </div>
  )
}

export default ProblemStatements
