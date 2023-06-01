import axios from "axios";
import { urlPrefix } from "../constants/apiurl";

const baseUrl = urlPrefix + "/api/v1/admin/user";

export interface PaginationArgs{
    page:Number,
    size:Number,
    sort:String,
}

export const UserApi = {
    getUsers: async function(args:PaginationArgs){
        const result = await axios.get(baseUrl,{
            params:args,
        });
        return result;
    },
};
