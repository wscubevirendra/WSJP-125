import { client } from "./helper";

export const fetchRooms = async () => {
    try {
        const response = await client.get("room-type");

        return {
            success: response.data.success,
            data: response.data.rooms,
            message: response.data.message
        }

    } catch (error) {
        return {
            success: false,
            data: [],
            message: "Internal Server Error"
        }

    }
}



export const fetchRoomsById = async (id) => {
    try {
        const response = await client.get(`room-type/${id}`);

        return {
            success: response.data.success,
            data: response.data.rooms,
            message: response.data.message
        }

    } catch (error) {
        return {
            success: false,
            data: [],
            message: "Internal Server Error"
        }
    }
}



export const fetchCategory = async () => {
    try {
        const response = await client.get("category");

        return {
            success: response.data.success,
            data: response.data.categories,
            message: response.data.message
        }

    } catch (error) {
        return {
            success: false,
            data: [],
            message: "Internal Server Error"
        }

    }
}



export const fetchCategoryById = async (id) => {
    try {
        const response = await client.get(`category/${id}`);

        return {
            success: response.data.success,
            data: response.data.category,
            message: response.data.message
        }

    } catch (error) {
        return {
            success: false,
            data: [],
            message: "Internal Server Error"
        }
    }
}



export const fetchProduct = async () => {
    try {
        const response = await client.get("product");

        return {
            success: response.data.success,
            data: response.data.products,
            message: response.data.message
        }

    } catch (error) {
        return {
            success: false,
            data: [],
            message: "Internal Server Error"
        }

    }
}



export const fetchProductById = async (id) => {
    try {
        const response = await client.get(`product/${id}`);

        return {
            success: response.data.success,
            data: response.data.product,
            message: response.data.message
        }

    } catch (error) {
        return {
            success: false,
            data: [],
            message: "Internal Server Error"
        }
    }
}