import React from "react";

export default function Card({ title = "Dummy", thumbnail = "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp", price = "199" }) {
    return (
        <div className="col-4">
            <div className="card h-100 shadow-sm">
                <img src={thumbnail} className="card-img-top" alt={title} />

                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">₹{price}</p>
                    <button className="btn btn-primary w-100">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

    );
}