import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    const user = false
  return (
    <header className='text-black border-b border-gray-200 p-8'>
        <div className='container flex justify-between items-ceter m-auto max-w-screen-md align-center'>
            <Link className='flex font-medium items-center text-black flex' href={'/'}>
                <span className='ml-3 text-xl'>Blog Site</span>
            </Link>
            <div>
                {
                    user ? (
                        <>
                        <Link
                        href={"/create-post"}
                        className='inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base'
                        >
                            Create Post
                        </Link>
                        <Link
                        href={"/"}
                        className='inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base'
                        >
                            Logout
                        </Link>
                        
                        </>
                    ) : (
                        <>
                                       <Link
                        href={"/register"}
                        className='inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base'
                        >
                            Register
                        </Link>
                        <Link
                        href={"/login"}
                        className='inline-flex text-black items-center bg-[#fff] border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base'
                        >
                            Login
                        </Link>
                        
                        </>
                    )
                }
            </div>

        </div>
    </header>
  )
}

export default Navbar