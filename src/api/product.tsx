import axios from "axios";
import { urlPrefix } from "../constants/apiurl";

const baseUrl = urlPrefix + "/api/v1";

interface SimplePaginationArgs {
  page: Number;
  size: Number;
  sort: String;
}
export interface PaginationArgs extends SimplePaginationArgs {
  name: String;
  minPrice: Number;
  maxPrice: Number;
}

export const ProductApi = {
  getProducts: async function (args: PaginationArgs) {
    const result = await axios.get(baseUrl+"/product", {
      params: args,
    });
    return result;
  },
  getProductsEager: async function (args: SimplePaginationArgs) {
    const result = await axios.get(baseUrl + "/employee/product/eager", {
      params: args,
    });
    return result;
  },
  createProduct: async function (product: any) {
    const result = await axios.post(baseUrl + "/employee/product", product);
    return result;
  },
  updateProduct: async function (id: number, product: any) {
    console.log(product);
    const result = await axios.put(baseUrl + "/employee/product/" + id, product);
    return result;
  },
  deleteProduct: async function (id: number) {
    const result = await axios.delete(baseUrl + "/employee/product/" + id);
    return result;
  },
};
