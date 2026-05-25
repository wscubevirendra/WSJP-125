import RoomFilter from '@/components/website/filter/RoomFilter'
import React from 'react'

export default function layout({ children }) {
    return (
        <div className='max-w-7xl flex gap-4 p-4 mx-auto'>
            <div className='w-[200px] bg-white shadow p-4 '>
                <RoomFilter />
                <RoomFilter />
                <RoomFilter />

            </div>

            <div className='flex-1'>
                {
                    children
                }
            </div>

        </div>
    )
}
