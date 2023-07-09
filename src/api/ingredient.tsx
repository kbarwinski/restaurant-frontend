import axios from "axios";
import { urlPrefix } from "../constants/apiurl";

const baseUrl = urlPrefix + "/api/v1/employee/ingredient";

export const IngredientApi = {
  getIngredients: async function () {
    const result = await axios.get(baseUrl + "/stock-asc");
    return result;
  },
  createIngredient: async function (ingredient: any) {
    const result = await axios.post(baseUrl, ingredient);
    return result;
  },
  updateIngredient: async function (id: number, ingredient: any) {
    const result = await axios.put(baseUrl + "/" + id, ingredient);
    return result;
  },
  deleteIngredient: async function (id: number) {
    const result = await axios.delete(baseUrl + "/" + id);
    return result;
  },
};
