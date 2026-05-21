import Link from "next/link";
import Image from "next/image";

export default function RecipeCard({ recipe }) {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">

            {/* Image */}
            <div className="relative">
                <Image
                    src={recipe.image}
                    width={200}
                    height={200}
                    alt={recipe.name}
                    preload={true}
                    className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />

            </div>

            {/* Content */}
            <div className="p-4">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {recipe.name}
                </h3>



                {/* Info */}
                <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                    <span>⏱ {recipe.servings} mins</span>
                    <span>⭐ {recipe.rating}</span>
                </div>

                {/* Button */}
                <Link
                    href={`/recipe/${recipe.id}`}
                    className="block mt-4 text-center bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                >
                    View Recipe
                </Link>
            </div>
        </div>
    );
}