import React from 'react'
import Link from 'next/link'
import {AiFillLike} from "react-icons/ai"

const Post = () => {
  return (
    <div>
        <section
        className='text-gray-600'
        >
            <div
            className='container px-7 py-12 mx-auto'
            >
            <div
            className='flex flex-wrap m-4'
            >
            <div
            className='p-4'
            >
            <div
            className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'

            >
            <img 
            className='lg:h-screen w-full object-cover object-center'
            src='https://images.pexels.com/photos/13216087/pexels-photo-13216087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='post-img'
            />
            <div className='p-6'>
            <div className='flex justify-between align-center'>
                <h2 className='tracking-widest text-xz title-font font-medium text-gray-400 mb-1'>Category</h2>
                <h2 className='tracking-widest text-xz title-font font-medium text-gray-400 mb-1'>thejayadad</h2>
            </div>
            <h1 className='title-font text-lg font-medium text-gray-900 mb-1'>Post Title</h1>
            <h2 className='tracking-widest text-xz title-font font-medium text-gray-400 mb-1'>thejayadad</h2>
            <p className='leading-relaxed mb-3'>Just some description Text Just some description Text Just some description Text Just some description Text Just some description Text Just some description TextJust some description Text Just some description Text</p>
            <div className='flex items-center flex-wrap justify-between'>
            <Link href="/post/din">See More</Link>
            <span className='text-gray'>
                <button className='w-4 h-4 mr-1'>
                <AiFillLike size={18} /> 

                </button> 1.5k
            </span>
            </div>
            </div>

            </div>


            </div>

            </div>

            </div>

        </section>

    </div>
  )
}

export default Post