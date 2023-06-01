import axios from "axios";
import { urlPrefix } from "../constants/apiurl";

const baseUrl = urlPrefix + "/api/v1";

export interface PaginationArgs{
    page:number,
    size:number,
    sort:string,
}

export const OrderApi = {
    getOrders: async function(args:PaginationArgs){
        const result = await axios.get(baseUrl+"/employee/order",{
            params:args,
        });
        return result;
    },
    createOrder: async function(order:any){
        const result = await axios.post(baseUrl+"/client/order",order);
        return result;
    },
    deleteOrder: async function(uuid:string){
        const result = await axios.delete(baseUrl+"/employee/order/"+uuid);
        return result;
    },
    changeOrderStatus: async function(status:string,uuid:string){
        const result = await axios.put(baseUrl+"/employee/order/"+uuid+"/status",status,{
            headers:{
                "Content-Type":"text/plain",
            }
        });
        return result;
    },
    getByUUID: async function(uuid:string){
        const result = await axios.get(baseUrl+"/client/order/"+uuid);
        return result;
    }
}

