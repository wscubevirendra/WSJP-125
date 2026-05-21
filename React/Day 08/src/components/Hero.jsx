import React from 'react'

export default function Hero({ children }) {
    return (
        <div className='grid grid-cols-2'>
            <div>
                {children}
            </div>
            <div className='bg-green-600 p-10'>

            </div>
        </div>
    )
}
