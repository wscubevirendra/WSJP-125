import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { store } from "../context/Context";

export default function Cart() {
    const { cart, qtyHandler } = useContext(store)


    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

                {/* Cart Items */}
                <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border-b py-4"
                        >
                            {/* Left */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.thumbnail}
                                    alt=""
                                    className="w-20 h-20 object-cover rounded-lg"
                                />

                                <div>
                                    <h3 className="font-medium">{item.title}</h3>
                                    <p className="text-gray-500">₹{item.price}</p>
                                </div>
                            </div>

                            {/* Quantity */}
                            <div className="flex items-center gap-3">
                                <button onClick={() => qtyHandler("inc", item.id)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                                <span>{item.qty}</span>
                                <button disabled={item.qty == 1 ? true : false} onClick={() => qtyHandler("dec", item.id)} className="px-2 py-1 disabled:bg-red-500 bg-gray-200 rounded">-</button>
                            </div>

                            {/* Price */}
                            <div className="font-semibold">
                                ₹{item.price * item.qty}
                            </div>

                            {/* Remove */}
                            <button className="text-red-500">
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Summary */}
                <div className="bg-white p-6 rounded-2xl shadow h-fit">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>₹{subtotal}</span>
                    </div>

                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>₹50</span>
                    </div>

                    <hr className="my-3" />

                    <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>₹{subtotal + 50}</span>
                    </div>

                    <button className="w-full mt-4 bg-black text-white py-2 rounded-xl hover:bg-gray-800">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}