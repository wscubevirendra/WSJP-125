'use client'

import React from 'react'
import Link from 'next/link'

export default function Header() {

    return (
        <div className='w-full bg-gray-300 py-4 px-2 mb-4'>
            <nav>
                <ul className='flex gap-6 text-2xl '>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/jaipur/mern-stack-course">
                            MERN Stack
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => alert("Hello")} className='border text-red-500'>Click</button>
                    </li>

                </ul>
            </nav>

        </div >
    )
}
