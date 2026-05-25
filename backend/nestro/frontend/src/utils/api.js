import { client } from "./helper";

export const fetchRooms = async () => {
    try {
        const response = await client.get("room-type");
        return {
            success: response.data.success,
            data: response.data.rooms
        }

    } catch (error) {
        return {
            success: false,
            data: []
        }

    }
}
