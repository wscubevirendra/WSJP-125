import React, { useContext } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { store } from "../context/Context";

export default function ProductCard({ product }) {
    const { addToCart } = useContext(store);

    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group">

            {/* Image */}
            <Link to={`/product/${product.id}`}>
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">

                    <img
                        src={product.thumbnail}
                        alt={product.name}
                        className="h-full w-full object-contain group-hover:scale-105 transition duration-300"
                    />
                </div>
            </Link>

            {/* Content */}
            <div className="p-4">

                {/* Category */}
                <p className="text-xs text-gray-400 uppercase">
                    {product.category}
                </p>

                {/* Title */}
                <h2 className="text-sm font-semibold text-gray-800 line-clamp-2 mt-1">
                    {product.title}
                </h2>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2 text-yellow-500 text-sm">
                    <FaStar />
                    <span className="text-gray-600 text-xs">
                        {product.rating || 4.5}
                    </span>
                </div>

                {/* Price Section */}
                <div className="mt-3 flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                        ₹{product.price}
                    </span>

                    {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                            ₹{product.originalPrice}
                        </span>
                    )}

                    {product.discountPercentage && (
                        <span className="text-xs text-green-600 font-medium">
                            {product.discountPercentage}% OFF
                        </span>
                    )}
                </div>

                {/* Button */}
                <button
                    onClick={() => {
                        addToCart({
                            name: product.title,
                            price: product.price,
                            thumbnail: product.thumbnail,
                            id: product.id,
                            qty: 1
                        })
                    }}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                    <FaShoppingCart />
                    Add to Cart
                </button>

            </div>
        </div >
    );
}