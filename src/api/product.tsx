import axios from "axios";
import { urlPrefix } from "../constants/apiurl";

const baseUrl = urlPrefix + "/api/v1/product";

export interface PaginationArgs{
    name:String,
    minPrice:Number,
    maxPrice:Number,
    page:Number,
    size:Number,
    sort:String,
}

export const ProductApi = {
    getProducts: async function(args:PaginationArgs){
        const result = await axios.get(baseUrl,{
            params:args,
        });
        return result;
    },
}