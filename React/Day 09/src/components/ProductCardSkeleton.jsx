import React from "react";

export default function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
            
            {/* Image Skeleton */}
            <div className="h-48 bg-gray-200"></div>

            {/* Content */}
            <div className="p-4 space-y-3">
                
                {/* Category */}
                <div className="h-3 w-16 bg-gray-200 rounded"></div>

                {/* Title */}
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>

                {/* Rating */}
                <div className="h-3 w-20 bg-gray-200 rounded"></div>

                {/* Price */}
                <div className="flex gap-2">
                    <div className="h-4 w-16 bg-gray-200 rounded"></div>
                    <div className="h-4 w-12 bg-gray-200 rounded"></div>
                </div>

                {/* Button */}
                <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
            </div>
        </div>
    );
}