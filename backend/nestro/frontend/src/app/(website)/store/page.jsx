import ProductCard from '@/components/website/ProductCard'
import React from 'react'

export default function page() {
    return (
        <div>
            <div className='w-full py-6 px-2 shadow-2xl my-4 flex justify-between'>
                <span>128 products found</span>

                <select name="" id="" className='px-4 py-2 shadow  border-none outline-0'>
                    <option value="">Hight to Low</option>
                    <option value="">Hight to Low</option>
                    <option value="">Hight to Low</option>
                    <option value="">Hight to Low</option>
                </select>


            </div>
            <div className='grid md:grid-cols-3 p-4 gap-4'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />

            </div>
        </div>
    )
}
