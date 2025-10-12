export interface Camper {
    id: string;
    name: string;
    price: number;
    rating: number;
    location: string;
    description: string;
    form: string;
    transmission: string;
    engine: string;
    AC: boolean;
    kitchen: boolean;
    bathroom: boolean;
    TV: boolean;
    gallery: { thumb: string; original: string }[];
    reviews: {
        reviewer_name: string;
        reviewer_rating: number;
        comment: string;
    }[];
}

export interface CamperFilters {
    location: string;
    form: string;
    AC: boolean;
    automatic: boolean;
    kitchen: boolean;
    TV: boolean;
    bathroom: boolean;
}

export interface CampersState {
    campers: Camper[];
    filters: CamperFilters;
    setFilter: <K extends keyof CampersState["filters"]>(
        key: K,
        value: CampersState["filters"][K]
    ) => void;
    fetchCampers: () => Promise<void>;
}
