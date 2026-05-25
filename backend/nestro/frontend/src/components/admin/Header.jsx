'use client'

import React from 'react'
import { FaBell, FaSearch } from "react-icons/fa";
import Image from 'next/image';

export default function Header() {
    return (
        <div className='
            w-full
            h-[70px]
            bg-white
            shadow-sm
            border-b
            px-6
            flex
            items-center
            justify-between
            sticky
            top-0
            z-40
        '>

            {/* Left Side */}
            <div>
                <h1 className='text-2xl font-bold text-gray-800'>
                    Admin Dashboard
                </h1>
                <p className='text-sm text-gray-500'>
                    Welcome back 👋
                </p>
            </div>

            {/* Right Side */}
            <div className='flex items-center gap-5'>

                {/* Search */}
                <div className='
                    hidden
                    md:flex
                    items-center
                    gap-2
                    bg-gray-100
                    px-4
                    py-2
                    rounded-xl
                    w-[250px]
                '>
                    <FaSearch className='text-gray-500' />
                    <input
                        type="text"
                        placeholder='Search here...'
                        className='
                            bg-transparent
                            outline-none
                            text-sm
                            w-full
                        '
                    />
                </div>

                {/* Notification */}
                <div className='
                    relative
                    w-10
                    h-10
                    rounded-full
                    bg-gray-100
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    hover:bg-gray-200
                    duration-200
                '>
                    <FaBell className='text-gray-700' />

                    <span className='
                        absolute
                        top-1
                        right-1
                        w-2
                        h-2
                        bg-red-500
                        rounded-full
                    '></span>
                </div>

                {/* Profile */}
                <div className='flex items-center gap-3 cursor-pointer'>
                    <img
                        src="https://i.pravatar.cc/150?img=12"
                        alt='profile'
                        width={45}
                        height={45}
                        className='rounded-full border-2 border-gray-200'
                    />

                    <div className='hidden sm:block'>
                        <h3 className='text-sm font-semibold text-gray-800'>
                            John
                        </h3>
                        <p className='text-xs text-gray-500'>
                            Admin
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}