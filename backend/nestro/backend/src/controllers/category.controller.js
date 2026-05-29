import CategoryModel from "../models/category.model.js";
import { sendBadRequest, sendConflict, sendCreated, sendNotFound, sendServerError, sendSuccess } from "../utils/response.js"

const get = async (req, res) => {
    try {

        const categories = await CategoryModel.find();
        return res.status(200).json({
            success: true,
            message: "Data find",
            categories
        })

    } catch (error) {
        sendServerError(res, "Internal Server Error")
    }

}

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await CategoryModel.findById(id)
        return res.status(200).json({
            success: true,
            message: "Data find",
            category: category
        })

    } catch (error) {
        sendServerError(res, "Internal Server Error")
    }

}


const create = async (req, res) => {
    try {

        const { name, slug, roomId } = req.body;

        // Cloudinary Image URL
        const image = req.file.path;
        console.log(image, "IMAGE")
        const category = await CategoryModel.findOne({ name });
        if (category) return sendConflict(res);
        await CategoryModel.create({ name, slug, image, roomId, image });
        sendCreated(res);

    } catch (error) {
        console.log(error, "error")
        sendServerError(res, "Internal Server Error")
    }

}

const update = async (req, res) => {
    try {
        const { id } = req.params;

        const { name, slug, roomId } = req.body;
        const category = await CategoryModel.findOne({ name });
        if (category) return sendConflict(res);
        const update = {}

        if (name && slug) {
            update.name = name;
            update.slug = slug;
        }

        if (roomId) {
            update.roomId = roomId;
        }

        await CategoryModel.updateOne(
            { _id: id },
            { $set: update }
        )


    } catch (error) {
        console.log(error, "error")
        sendServerError(res, "Internal Server Error")
    }

}

//Wood



const deleteById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await CategoryModel.findById({ _id: id });
        if (!category) return sendNotFound(res);
        await CategoryModel.findByIdAndDelete(id)

        sendSuccess(res, "Delete Sucessfully")

    } catch (error) {
        sendServerError(res, "Internal Server Error")
    }

}

const StatusUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await CategoryModel.findById({ _id: id });
        if (!category) return sendNotFound(res);
        await CategoryModel.findByIdAndUpdate(
            { _id: id },
            {
                $set: {
                    status: !category.status
                }
            }

        )

        sendSuccess(res, "Data Update Sucessfully")

    } catch (error) {
        sendServerError(res, "Internal Server Error")
    }

}

export {
    get,
    create,
    StatusUpdate,
    deleteById,
    getById,
    update
}