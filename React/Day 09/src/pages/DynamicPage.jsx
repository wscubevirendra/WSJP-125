import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { FaStar, FaShoppingCart } from "react-icons/fa";

export default function DynamicPage() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);

    const [product, setProduct] = useState({});

    useEffect(
        () => {
            async function fetchProducts() {
                setLoading(true)
                axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
                    setProduct(response.data)
                }).catch((error) => {
                    setProduct([]);
                    console.log(error)
                }).finally(() => {
                    setLoading(false)
                })
            }


            fetchProducts()
        },
        [id]
    )

    const discountedPrice = (
        product.price - (product.price * product.discountPercentage) / 100
    ).toFixed(2);

    if (loading) {
        return <div className='w-20 h-20 mx-auto my-20 '>Loading.....</div>
    }

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8 grid md:grid-cols-2 gap-8">

            {/* LEFT - Images */}
            <div>
                <div className="bg-gray-100 rounded-xl p-4 flex justify-center items-center">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="h-80 object-contain"
                    />
                </div>

                {/* Extra images */}
                <div className="flex gap-3 mt-4">
                    {product.images?.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt="product"
                            className="h-20 w-20 object-contain border rounded-lg p-1 cursor-pointer hover:border-blue-500"
                        />
                    ))}
                </div>
            </div>

            {/* RIGHT - Info */}
            <div>

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {product.title}
                </h1>

                {/* Brand + Category */}
                <p className="text-sm text-gray-500 mt-1">
                    {product.brand} • {product.category}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">
                    <div className="flex text-yellow-500">
                        <FaStar />
                        <span className="ml-1 text-gray-700">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                        ({product?.reviews?.length} reviews)
                    </span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-center gap-3">
                    <span className="text-2xl font-bold text-gray-900">
                        ${discountedPrice}
                    </span>

                    <span className="text-gray-400 line-through">
                        ${product.price}
                    </span>

                    <span className="text-green-600 font-medium">
                        {product.discountPercentage}% OFF
                    </span>
                </div>

                {/* Stock */}
                <p className="mt-2 text-sm text-green-600">
                    {product.availabilityStatus} ({product.stock} left)
                </p>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-relaxed">
                    {product.description}
                </p>

                {/* Add to Cart */}
                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                    <FaShoppingCart />
                    Add to Cart
                </button>

                {/* Extra Info */}
                <div className="mt-6 text-sm text-gray-500 space-y-1">
                    <p>SKU: {product.sku}</p>
                    <p>Warranty: {product.warrantyInformation}</p>
                    <p>Shipping: {product.shippingInformation}</p>
                    <p>Return: {product.returnPolicy}</p>
                </div>
            </div>

            {/* REVIEWS */}
            <div className="md:col-span-2 mt-10">
                <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>

                <div className="space-y-4">
                    {product?.reviews?.map((rev, i) => (
                        <div key={i} className="border p-4 rounded-lg">

                            <div className="flex items-center justify-between">
                                <h4 className="font-medium">{rev.reviewerName}</h4>
                                <span className="text-sm text-gray-400">
                                    {new Date(rev.date).toLocaleDateString()}
                                </span>
                            </div>

                            <div className="flex text-yellow-500 mt-1">
                                {Array.from({ length: rev.rating }).map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            <p className="text-gray-600 mt-2">{rev.comment}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}



