"use client"

import React, { useState } from 'react'

export default function Btn() {
    const [count, setCount] = useState(0)
    return (
        <button onClick={() => setCount(10)} className='px-4 py-2 shadow  bg-amber-500 text-white mt-10 rounded-2xl'>Call Now</button>
    )
}
