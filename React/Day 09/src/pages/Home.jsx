import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/ProductCardSkeleton';
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(
        () => {
            const fetchCategories = () => {
                axios.get("https://dummyjson.com/products/categories").then((response) => {
                    setCategory(response.data)
                }).catch((error) => {
                    console.log(error)
                })
            }

            fetchCategories()
        },
        []
    )

    useEffect(
        () => {


            async function fetchProducts() {

                setLoading(true)
                let API = "https://dummyjson.com/products";
                if (slug != null) {
                    API = `https://dummyjson.com/products/category/${slug}`
                }

                console.log(API)
                axios.get(API).then((response) => {
                    setProducts(response.data.products)
                }).catch((error) => {
                    setProducts([]);
                    console.log(error)
                }).finally(() => {
                    setLoading(false)
                })
            }


            fetchProducts()
        },
        [slug]
    )


    function limitHandler(limit){
        console.log(limit)
    }



    return (
        <div className="max-w-7xl mx-auto p-6 my-2">
            <ul className='flex flex-wrap my-4 gap-4'>
                <li className={`bg-[#eee] ${slug == null ? "bg-teal-500 text-white font-medium" : ""} rounded-2xl px-4 cursor-pointer hover:shadow hover:outline-1 py-2`}>
                    <Link to="/">
                        All
                    </Link>
                </li>
                {
                    category.map((cat, index) => {
                        return (
                            <li className={`bg-[#eee] ${slug == cat.slug ? "bg-teal-500 text-white font-medium" : ""} rounded-2xl px-4 cursor-pointer hover:shadow hover:outline-1 py-2`}>
                                <Link to={`/${cat.slug}`}>
                                    {cat.name}

                                </Link>
                            </li>

                        )
                    })
                }

            </ul>
            <div>
                <select onChange={(e) => limitHandler(e.target.value)} className='bg-[#eee] px-10 py-2 my-4 cursor-pointer'>
                    <option value="30">30</option>
                    <option value="30">60</option>
                    <option value="30">90</option>
                    <option value="30">120</option>
                    <option value="30">150</option>
                    <option value="30">180</option>
                    <option value="30">210</option>
                </select>
            </div>

            <div className="grid grid-cols-4  gap-4">
                {

                    loading ?
                        [1, 2, 3, 4, 4, 5, 6, 6, 7].map(o => <ProductCardSkeleton />)
                        :
                        products.map((prod) => {
                            return <ProductCard key={prod.id} product={prod} />
                        })
                }

            </div>
        </div >

    )
}
