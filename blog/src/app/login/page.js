import React from 'react'

const Login = () => {
  return (
    <section className='p-4'>
    <div className='bg-white flex flex-col m-auto max-w-screen-sm'>
    <h2 className='text-gray-900 text-center text-lg mb-4 font-medium title-font'>Login</h2>
    <form>
    <div className='relative mb-4'>
      <input 
      className='w-full bg-white rounded border border-gray-300 foucs:border-gray-500 focus:ring-2 rocus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' placeholder='Email'
      />
    </div>
    <div className='relative mb-4'>
      <input 
      className='w-full bg-white rounded border border-gray-300 foucs:border-gray-500 focus:ring-2 rocus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' placeholder='Password'
      />
    </div>
    <button
    className='w-full text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 text-lg'
    >Login</button>
    </form>
    </div>
  </section>
  )
}

export default Login