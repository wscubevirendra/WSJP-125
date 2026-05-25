import React from 'react'

export default function RoomFilter() {
    return (
        <div>
            <h4>Room Type</h4>
            <ul className='my-4'>
                <li className='flex text-sm mt-2 gap-2 '>
                    <input type="checkbox" />
                    <span>Living Room</span>
                    <span className='ms-auto'>34</span>
                </li>
                <li className='flex text-sm mt-2 gap-2 '>
                    <input type="checkbox" />
                    <span>Living Room</span>
                    <span className='ms-auto'>34</span>
                </li>
                <li className='flex text-sm mt-2 gap-2 '>
                    <input type="checkbox" />
                    <span>Living Room</span>
                    <span className='ms-auto'>34</span>
                </li>
                <li className='flex text-sm mt-2 gap-2 '>
                    <input type="checkbox" />
                    <span>Living Room</span>
                    <span className='ms-auto'>34</span>
                </li>
            </ul>
        </div>
    )
}
