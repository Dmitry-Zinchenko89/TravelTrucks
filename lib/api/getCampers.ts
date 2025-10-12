import { axiosInstance } from "./axiosInstance";
import { CamperFilters } from "@/types/campers";
import { Camper } from "@/types/campers";


export const getCampers = async (filters: CamperFilters = {
    location: "",
    form: "",
    AC: false,
    automatic: false,
    kitchen: false,
    TV: false,
    bathroom: false
}): Promise<Camper[]> => {
    const params = new URLSearchParams();

    if (filters.location) params.append("location", filters.location);
    if (filters.form) params.append("form", filters.form);
    if (filters.AC) params.append("AC", "true");
    if (filters.automatic) params.append("automatic", "true");
    if (filters.kitchen) params.append("kitchen", "true");
    if (filters.TV) params.append("TV", "true");
    if (filters.bathroom) params.append("bathroom", "true");

    const { data } = await axiosInstance.get(`/campers?${params.toString()}`);
    return data.items;
}