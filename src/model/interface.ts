import { StatusProduct } from "./isAvailable";

export interface PlushieData {
    name: string;
    status: StatusProduct;
    costPrice: number;
    type: string; 
}

export interface ClientData {
    id: number;
    name: string;
    cart: PlushieData[]; 
}

export interface DatacenterData {
    clients: ClientData[];
    plushies: PlushieData[];
}
