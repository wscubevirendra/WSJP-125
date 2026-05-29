import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required: [true, "Category name is required"]

    },
    slug: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required: [true, "Category slug is required"]

    },
    roomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "rooms"

    },
    image: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    }
},
    {
        timestamps: true
    }
)

const CategoryModel = mongoose.model("categories", categorySchema);
export default CategoryModel