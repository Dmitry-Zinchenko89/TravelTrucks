import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getCampersById = async (id: string) => {
    const { data } = await axios.get(`${API_URL}/campers/${id}`)
    return data;
};