import { create } from "zustand";
import axios from "axios";
import { CampersState } from "@/types/campers";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useCampersStore = create<CampersState>((set, get) => ({
    campers: [],
    filters: {
        location: "",
        form: "",
        AC: false,
        automatic: false,
        kitchen: false,
        TV: false,
        bathroom: false,
    },

    setFilter: (key, value) =>
        set((state) => ({
            filters: { ...state.filters, [key]: value },
        })),

    fetchCampers: async () => {
        const { filters } = get();

        const params = new URLSearchParams();

        Object.entries(filters).forEach(([key, value]) => {
            if (value !== "" && value !== false) {
                params.append(key, String(value));
            }
        });

        const { data } = await axios.get(`${API_URL}/campers?${params.toString()}`);
        console.log(`${API_URL}/campers?${params.toString()}`);
        set({ campers: data });
    },
}));

