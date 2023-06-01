import axios from "axios";
import { urlPrefix } from "../constants/apiurl";

const baseUrl = urlPrefix + "/api/v1";

export interface PaginationArgs{
    page:Number,
    size:Number,
    sort:String,
}

export const OrderApi = {
    getOrders: async function(args:PaginationArgs){
        const result = await axios.get(baseUrl+"/employee/order",{
            params:args,
        });
        return result;
    },
}

