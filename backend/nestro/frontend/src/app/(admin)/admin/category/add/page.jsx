"use client";

import { useState } from "react";
import { FiSave } from "react-icons/fi";

export default function CategoryForm() {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
  });

  // Auto generate slug
  const handleNameChange = (value) => {
    setFormData({
      name: value,
      slug: value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-"),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Category Data:", formData);

    // API call here

    setFormData({
      name: "",
      slug: "",
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5">
        Add Category
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* Category Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category Name
          </label>

          <input
            type="text"
            placeholder="Enter category name"
            value={formData.name}
            onChange={(e) =>
              handleNameChange(e.target.value)
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Slug
          </label>

          <input
            type="text"
            placeholder="category-slug"
            value={formData.slug}
            onChange={(e) =>
              setFormData({
                ...formData,
                slug: e.target.value,
              })
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-lg text-sm font-medium transition"
        >
          <FiSave size={16} />
          Save Category
        </button>
      </form>
    </div>
  );
}